import YAML from 'js-yaml';
import gameDataYaml from './gameData.yaml?raw';

const gameData = YAML.load(gameDataYaml);

export { gameData };