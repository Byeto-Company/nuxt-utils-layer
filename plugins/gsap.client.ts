import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";

/**
 * Nuxt plugin that integrates GSAP (GreenSock Animation Platform)
 * and registers common GSAP plugins for use in the application.
 *
 * Registered plugins:
 * - `ScrollTrigger` → Enables scroll-based animations.
 * - `ScrollToPlugin` → Allows smooth scrolling to elements or positions.
 * - `TextPlugin` → Animates text content changes.
 *
 * Provides global access to:
 * - `gsap` → Core GSAP animation library.
 * - `ScrollTrigger` → ScrollTrigger plugin instance.
 *
 * @module plugins/gsap
 */
export default defineNuxtPlugin(() => {
    if (import.meta.client) {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);
    }

    return {
        provide: {
            gsap,
            ScrollTrigger,
        },
    };
});
