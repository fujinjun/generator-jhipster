const expect = require('expect');
const path = require('path');
const { skipPrettierHelpers: helpers } = require('../utils/utils');
const {
  SUPPORTED_CLIENT_FRAMEWORKS: { ANTD },
} = require('../../generators/generator-constants');

const commonOptions = { clientFramework: ANTD };
const tmpdir = path.join(__dirname,'../../antdge');
describe('JHipster ant design generator', () => {
  describe('microfrontend', () => {
    it('should not succeed', async () => {
 
      console.log(tmpdir);
      await expect(
        helpers
          .create(path.join(__dirname, '../../generators/client'))
          .cd(tmpdir)
          .withOptions({
            skipInstall: true,
            auth: 'oauth2',
            microfrontend: false,
            enableTranslation: true,
            nativeLanguage: 'en',
            languages: ['fr', 'en'],
            ...commonOptions,
          }) 
          .run()
      ).rejects.toThrow('Microfrontend requires angularX client framework.');
    });
  });
});
