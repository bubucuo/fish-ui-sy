import { addons, types } from "@storybook/addons";
import { ThemePicker, ADDON_ID, THEME_ID } from "../docs/theme-addon";

addons.register(ADDON_ID, () => {
  addons.add(THEME_ID, {
    title: "主题",
    type: types.TOOL,
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: ThemePicker,
  });
});
