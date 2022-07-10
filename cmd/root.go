package cmd

import (
	"fmt"
	"strings"

	"github.com/spf13/cobra"
	"github.com/spf13/pflag"
	"github.com/spf13/viper"

	"github.com/goshlanguage/cardsagainstkubernetes/pkg/server"
)

const (
	// The name of our config file, without the file extension because viper supports many different config file languages.
	defaultConfigFilename = "cardsagainstkubernetes"

	// The environment variable prefix of all environment variables bound to our command line flags.
	// For example, --number is bound to CARDS_NUMBER.
	envPrefix = "CARDS"
)

// Build the cobra command that handles our command line tool.
func NewRootCommand() *cobra.Command {
	port := "8888"

	rootCmd := &cobra.Command{
		Use:   "cakapi",
		Short: "A state API for the cardsagainstkubernetes game",
		PersistentPreRunE: func(cmd *cobra.Command, args []string) error {
			return initializeConfig(cmd)
		},
		RunE: func(cmd *cobra.Command, args []string) error {
			out := cmd.OutOrStdout()

			fmt.Fprintln(out, "Binding on port:", port)
			router := server.SetupRouter()

			router.Run(fmt.Sprintf("localhost:%s", port))

			return nil
		},
	}

	rootCmd.Flags().StringVarP(&port, "port", "p", "8888", "The port to listen on")

	return rootCmd
}

func initializeConfig(cmd *cobra.Command) error {
	v := viper.New()

	v.SetConfigName(defaultConfigFilename)

	v.AddConfigPath(".")

	if err := v.ReadInConfig(); err != nil {
		// It's okay if there isn't a config file
		if _, ok := err.(viper.ConfigFileNotFoundError); !ok {
			return err
		}
	}

	v.SetEnvPrefix(envPrefix)

	v.AutomaticEnv()

	bindFlags(cmd, v)

	return nil
}

// Bind each cobra flag to its associated viper configuration (config file and environment variable)
func bindFlags(cmd *cobra.Command, v *viper.Viper) {
	cmd.Flags().VisitAll(func(f *pflag.Flag) {
		// Environment variables can't have dashes in them, so bind them to their equivalent
		// keys with underscores, e.g. --port to CARDS_PORT
		if strings.Contains(f.Name, "-") {
			envVarSuffix := strings.ToUpper(strings.ReplaceAll(f.Name, "-", "_"))
			v.BindEnv(f.Name, fmt.Sprintf("%s_%s", envPrefix, envVarSuffix))
		}

		// Apply the viper config value to the flag when the flag is not set and viper has a value
		if !f.Changed && v.IsSet(f.Name) {
			val := v.Get(f.Name)
			cmd.Flags().Set(f.Name, fmt.Sprintf("%v", val))
		}
	})
}