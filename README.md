# lift-missing-var

A seeded failure for Lift's autofix demo. The server exits at startup unless `GREETING` is set, and `.env.example` gives it the safe default `hello`. Autofix should set `GREETING=hello` and redeploy; the app then answers `hello`.
