import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY ||
    "pk_test_51M07uxITSKAnEXTOJAhBtbZx4pCPaIDEi8X6PBhREPiWxvRUorkOJLQBckXHewHEueo6xHGE2fPEsrOn6nbALvh900uDI0WFhm"
);
