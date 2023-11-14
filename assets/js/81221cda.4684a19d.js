"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[4727],{3123:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=o(5893),t=o(1151);const a={title:"Configuration file",language:"en"},s=void 0,r={id:"configuration-file",title:"Configuration file",description:"The configuration should be the following paths otherwise Rio will use the default configuration.",source:"@site/docs/configuration-file.md",sourceDirName:".",slug:"/configuration-file",permalink:"/rio/docs/configuration-file",draft:!1,unlisted:!1,editUrl:"https://github.com/raphamorim/rio/tree/main/docs/docs/configuration-file.md",tags:[],version:"current",frontMatter:{title:"Configuration file",language:"en"},sidebar:"tutorialSidebar",previous:{title:"Command-line interface",permalink:"/rio/docs/command-line-interface"},next:{title:"Default colors",permalink:"/rio/docs/default-colors"}},l={},c=[];function d(n){const e={a:"a",code:"code",p:"p",pre:"pre",...(0,t.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"The configuration should be the following paths otherwise Rio will use the default configuration."}),"\n",(0,i.jsxs)(e.p,{children:["MacOS and Linux configuration file path is ",(0,i.jsx)(e.code,{children:"~/.config/rio/config.toml"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["Windows configuration file path is ",(0,i.jsx)(e.code,{children:"C:\\Users\\USER\\AppData\\Local\\rio\\config.toml"}),' (replace "USER" with your user name).']}),"\n",(0,i.jsx)(e.p,{children:"Updates to the configuration file automatically triggers Rio to render the terminal with the new configuration."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-toml",children:'# Cursor\n#\n# Default cursor is Block\n# Other available options are: \'_\' and \'|\'\n#\ncursor = \'\u2587\'\n\n# Blinking Cursor\n#\n# Default is false\n#\nblinking-cursor = false\n\n# Scroll Speed Multiplier\n#\n# You can change how many lines are scrolled each time by setting this option.\n# Defaul is 3.0.\n# Example:\n# scroll-multiplier = 3.0\n\n# Ignore theme selection foreground color\n#\n# Default is false\n#\n# Example:\n# ignore-selection-foreground-color = false\n\n# Enable Kitty Keyboard protocol\n#\n# Default is false\n#\n# Example:\n# use-kitty-keyboard-protocol = false\n\n# Performance\n#\n# Set WGPU rendering performance\n# High: Adapter that has the highest performance. This is often a discrete GPU.\n# Low: Adapter that uses the least possible power. This is often an integrated GPU.\n#\nperformance = "High"\n\n# Themes\n#\n# Rio looks for a specified theme in the themes folder\n# (macos and linux: ~/.config/rio/themes/dracula.toml)\n# (windows: C:\\Users\\USER\\AppData\\Local\\rio\\themes\\dracula.toml)\n#\n# Example:\n# theme = "dracula"\n\n# Padding-x\n#\n# define x axis padding (default is 10)\n#\n# Example:\n# padding-x = 10\n\n# Option as Alt\n#\n# This config only works on MacOs.\n# Possible choices: \'both\', \'left\' and \'right\'.\n#\n# Example:\n# option-as-alt = \'left\'\n\n# Window configuration\n#\n# \u2022 width - define the intial window width.\n#   Default: 600\n#\n# \u2022 height - define the inital window height.\n#   Default: 400\n#\n# \u2022 mode - define how the window will be created\n#     - "Windowed" (default) is based on width and height\n#     - "Maximized" window is created with maximized\n#     - "Fullscreen" window is created with fullscreen\n#\n# Example:\n# [window]\n# width = 600\n# height = 400\n# mode = "Windowed"\n\n# Background configuration\n#\n# \u2022 opacity - changes the background transparency state\n#   Default: 1.0\n#\n# \u2022 mode - defines background mode bewteen "Color" and "Image"\n#\n# \u2022 image - Set an image as background\n#   Default: None\n#\n# Example:\n# [background]\n# mode = "Image"\n# opacity = 1.0\n#\n# [background.image]\n# path = "/Users/rapha/Desktop/eastward.jpg"\n# width = 200.0\n# height = 200.0\n# x = 0.0\n# y = 0.0\n\n# Window Height\n#\n# window-height changes the inital window height.\n#   Default: 400\n#\n# Example:\n# window-height = 400\n\n# Fonts\n#\n# Configure fonts used by the terminal\n#\n# Note: You can set different font families but Rio terminal\n# will always look for regular font bounds whene\n#\n# You can also set family on root to overwrite all fonts\n# [fonts]\n#   family = "cascadiamono"\n#\n# You can also specify extra fonts to load\n# [fonts]\n# extras = [{ family = "Microsoft JhengHei" }]\n#\n#\n# Example:\n# [fonts]\n# size = 18\n#\n# [fonts.regular]\n# family = "cascadiamono"\n# style = "normal"\n# weight = 400\n#\n# [fonts.bold]\n# family = "cascadiamono"\n# style = "normal"\n# weight = 800\n#\n# [fonts.italic]\n# family = "cascadiamono"\n# style = "italic"\n# weight = 400\n#\n# [fonts.bold-italic]\n# family = "cascadiamono"\n# style = "italic"\n# weight = 800\n\n# Navigation\n#\n# "mode" - Define navigation mode\n#   \u2022 NativeTab (MacOs only)\n#   \u2022 CollapsedTab\n#   \u2022 BottomTab\n#   \u2022 TopTab\n#   \u2022 Breadcrumb\n#   \u2022 Plain\n#\n# "clickable" - Enable click on tabs to switch.\n# "use-current-path" - Use same path whenever a new tab is created.\n# "color-automation" - Set a specific color for the tab whenever a specific program is running.\n# "macos-hide-window-buttons" - (MacOS only) Hide window buttons\n#\n# Example:\n# [navigation]\n# mode = "CollapsedTab"\n# clickable = false\n# use-current-path = false\n# color-automation = []\n# macos-hide-window-buttons = false\n\n# Shell\n#\n# You can set `shell.program` to the path of your favorite shell, e.g. `/bin/fish`.\n# Entries in `shell.args` are passed unmodified as arguments to the shell.\n#\n# Default:\n#   - (macOS) user login shell\n#   - (Linux/BSD) user login shell\n#   - (Windows) powershell\n#\n# Example 1 using fish shell from bin path:\n#\n# shell = { program = "/bin/fish", args = ["--login"] }\n#\n# Example 2 for Windows using powershell\n#\n# shell = { program = "pwsh", args = [] }\n#\n# Example 3 for Windows using powershell with login\n#\n# shell = { program = "pwsh", args = ["-l"] }\n\n# Startup directory\n#\n# Directory the shell is started in. If this is unset the working\n# directory of the parent process will be used.\n#\n# This configuration only works if use-fork is disabled\n#\n# Example:\n# working-dir = "/Users/raphael/Documents/"\n\n# Environment variables\n#\n# The example below sets fish as the default SHELL using env vars\n# please do not copy this if you do not need it.\n#\n# Example:\n# env-vars = []\n\n# Disable render when unfocused\n#\n# This property disables the renderer process when Rio no longer\n# has focus.\n#\n# Example:\n# disable-renderer-when-unfocused = false\n\n# Use fork\n#\n# Defaults for POSIX-based systems (Windows is not configurable):\n# MacOS: spawn processes\n# Linux/BSD: fork processes\n#\n# Example:\n# use-fork = false\n\n# Colors\n#\n# Defining colors in the configuration file will override any                                                                                                                     \n# colors set in the theme if you\'re using a theme. The default                                                                                                                  \n# configuration is without a theme.    \n#\n# Example:\n# [colors]\n# background = \'#0F0D0E\'\n# foreground = \'#F9F4DA\'\n# cursor = \'#F38BA3\'\n# tabs = \'#443d40\'\n# tabs-active = \'#F38BA3\'\n# green = \'#0BA95B\'\n# red = \'#ED203D\'\n# blue = \'#12B5E5\'\n# yellow = \'#FCBA28\'\n\n# Bindings\n#\n# You can create custom key bindings for Rio terminal\n# More information in: raphamorim.io/rio/docs/custom-key-bindings\n#\n# Example:\n# [bindings]\n# keys = [\n#   { key = "q", with = "super", action = "Quit" },\n#   # Bytes[27, 91, 53, 126] is equivalent to "\\x1b[5~"\n#   { key = "home", with = "super | shift", bytes = [27, 91, 53, 126] }\n# ]\n\n# Log level\n#\n# This property enables log level filter. Default is "OFF".\n#\n# Example:\n# [developer]\n# log-level = "OFF"\n'})}),"\n",(0,i.jsxs)(e.p,{children:["If you have any suggestion of configuration ideas to Rio, please feel free to ",(0,i.jsx)(e.a,{href:"https://github.com/raphamorim/rio/issues/new",children:"open an issue"}),"."]})]})}function h(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},1151:(n,e,o)=>{o.d(e,{Z:()=>r,a:()=>s});var i=o(7294);const t={},a=i.createContext(t);function s(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);