export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  if (typeof window !== "undefined") {
    const script = document.createElement("script");
    script.src = "https://cdn.omise.co/omise.js";
    document.head.appendChild(script);

    return new Promise<void>((resolve) => {
      script.onload = () => {
        window.OmiseCard.configure({
          publicKey: config.public.omisePublicKey,
        });
        resolve();
      };
    });
  }
});
