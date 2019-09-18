export {};
declare global {
  // 如果在 .env.default 中定义了新的环境变量, 可以将其写到这里
  // 然后可以通过 ENV.<NAME> 访问
  interface EnvironmentVariable {}
}
