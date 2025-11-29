import mitt from "mitt";

/**
 * Nuxt plugin that provides a lightweight event bus using `mitt`.
 *
 * The event bus allows different parts of the application to communicate
 * through events without requiring direct references.
 *
 * It exposes three main methods:
 * - `on`   → Listen for an event
 * - `off`  → Stop listening for an event
 * - `emit` → Trigger an event
 *
 * @module plugins/bus
 * 
 * @example
 * // Injected as `bus` in your app
 * const { $bus } = useNuxtApp();
 *
 * // Listen for an event
 * $bus.on("my-event", (payload) => {
 *   console.log("Received:", payload);
 * });
 *
 * // Emit an event
 * $bus.emit("my-event", { foo: "bar" });
 *
 * // Stop listening
 * $bus.off("my-event", handler);
 *
 */
export default defineNuxtPlugin(() => {
    const emitter = mitt();

    return {
        provide: {
            bus: {
                on: emitter.on,
                off: emitter.off,
                emit: emitter.emit,
            },
        },
    };
});
