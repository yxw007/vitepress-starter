// .vitepress/theme/index.js
// import Layout from './Layout.vue'

import DefaultTheme from 'vitepress/theme'
import MyLayout from "./MyLayout.vue";

export default {
	// root component to wrap each page
	// Layout,

	...DefaultTheme,
	Layout: MyLayout,

	// this is a Vue 3 functional component
	NotFound: () => 'custom 404',

	enhanceApp({ app, router, siteData }) {
		// app is the Vue 3 app instance from `createApp()`.
		// router is VitePress' custom router. `siteData` is
		// a `ref` of current site-level metadata.
	},
	setup() {
		// this function will be executed inside VitePressApp's
		// setup hook. all composition APIs are available here.
	}
}
