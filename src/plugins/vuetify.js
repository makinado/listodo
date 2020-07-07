import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#2196F3",
                secondary: "#1565C0",
                accent: "#2979FF",
                error: "#FF1744",
                warning: "#FFD600",
                info: "#2979FF",
                success: "#00C853"
            },
            dark: {
                primary: "#2196F3",
                secondary: "#1565C0",
                accent: "#2979FF",
                error: "#FF1744",
                warning: "#FFD600",
                info: "#2979FF",
                success: "#00C853"
            }
        }
    }
});
