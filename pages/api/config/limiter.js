import { RateLimiter } from "limiter";

export const limiter = new RateLimiter({
  tokensPerInterval: 500,
  interval: "hour",
  fireImmediately: true,
});
