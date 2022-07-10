package server

import (
	"github.com/gin-gonic/gin"

	"github.com/goshlanguage/cardsagainstkubernetes/pkg/autogenerated"
)

func SetupRouter() *gin.Engine {
	router := gin.Default()

	gameserver := &GameServerImpl{}
	autogenerated.RegisterHandlersWithOptions(router, gameserver, autogenerated.GinServerOptions{})

	return router
}