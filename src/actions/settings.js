export const SETTINGS_ACTION_TYPES = {
  SETTINGS_CHANGE: 'settings:change',
};

export default {
  changeSettings: settings => ({
    type: SETTINGS_ACTION_TYPES.SETTINGS_CHANGE,
    settings,
  }),
};
