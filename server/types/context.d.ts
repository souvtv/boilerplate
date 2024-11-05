// type Variables = {
// 	//
// }

declare interface Env {
	// Worker Bindings
	ASSETS: Fetcher
}

type HonoEnv = {
	Bindings?: Env
	// Variables?: Variables
}

declare type WorkerContext = import('hono').Context<HonoEnv>
