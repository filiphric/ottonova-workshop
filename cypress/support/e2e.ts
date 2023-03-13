import '@scripts/testSetupHook.ts'
import '@scripts/infoCommand.ts'
import './utils/requestOverwrite'
import 'cypress-plugin-api'
import 'cypress-plugin-steps'
import "cypress-real-events/support";
import '@commands/getByData'
chai.use(require('chai-json-schema'));

