import { Bt as computed, Ht as getOutputDestroyRef, Qc as assertNotInReactiveContext, Uc as RuntimeError, Zc as assertInInjectionContext, hc as DestroyRef, sl as inject, xl as signal } from "./core-CVHS-hD8.js";
import { g as takeUntil, rr as Observable } from "./esm5-ChK3bs0s.js";
//#region node_modules/@angular/core/fesm2022/rxjs-interop.mjs
/**
* @license Angular v22.1.6
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*/
function takeUntilDestroyed(destroyRef) {
	if (!destroyRef) {
		ngDevMode && assertInInjectionContext(takeUntilDestroyed);
		destroyRef = inject(DestroyRef);
	}
	const destroyed$ = new Observable((subscriber) => {
		if (destroyRef.destroyed) {
			subscriber.next();
			return;
		}
		return destroyRef.onDestroy(subscriber.next.bind(subscriber));
	});
	return (source) => {
		return source.pipe(takeUntil(destroyed$));
	};
}
var OutputFromObservableRef = class {
	source;
	destroyed = false;
	destroyRef = inject(DestroyRef);
	constructor(source) {
		this.source = source;
		this.destroyRef.onDestroy(() => {
			this.destroyed = true;
		});
	}
	subscribe(callbackFn) {
		if (this.destroyed) throw new RuntimeError(953, ngDevMode && "Unexpected subscription to destroyed `OutputRef`. The owning directive/component is destroyed.");
		const subscription = this.source.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({ next: (value) => callbackFn(value) });
		return { unsubscribe: () => subscription.unsubscribe() };
	}
};
function outputFromObservable(observable, opts) {
	ngDevMode && assertInInjectionContext(outputFromObservable);
	return new OutputFromObservableRef(observable);
}
function outputToObservable(ref) {
	const destroyRef = getOutputDestroyRef(ref);
	return new Observable((observer) => {
		const unregisterOnDestroy = destroyRef?.onDestroy(() => observer.complete());
		const subscription = ref.subscribe((v) => observer.next(v));
		return () => {
			subscription.unsubscribe();
			unregisterOnDestroy?.();
		};
	});
}
function toSignal(source, options) {
	typeof ngDevMode !== "undefined" && ngDevMode && assertNotInReactiveContext(toSignal, "Invoking `toSignal` causes new subscriptions every time. Consider moving `toSignal` outside of the reactive context and read the signal value where needed.");
	const requiresCleanup = !options?.manualCleanup;
	if (ngDevMode && requiresCleanup && !options?.injector) assertInInjectionContext(toSignal);
	const cleanupRef = requiresCleanup ? options?.injector?.get(DestroyRef) ?? inject(DestroyRef) : null;
	const equal = makeToSignalEqual(options?.equal);
	let state;
	if (options?.requireSync) state = signal({ kind: 0 }, {
		equal,
		...ngDevMode ? createDebugNameObject(options?.debugName, "state") : void 0
	});
	else state = signal({
		kind: 1,
		value: options?.initialValue
	}, {
		equal,
		...ngDevMode ? createDebugNameObject(options?.debugName, "state") : void 0
	});
	let destroyUnregisterFn;
	const sub = source.subscribe({
		next: (value) => state.set({
			kind: 1,
			value
		}),
		error: (error) => {
			state.set({
				kind: 2,
				error
			});
			destroyUnregisterFn?.();
		},
		complete: () => {
			destroyUnregisterFn?.();
		}
	});
	if (options?.requireSync && state().kind === 0) throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
	destroyUnregisterFn = cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
	return computed(() => {
		const current = state();
		switch (current.kind) {
			case 1: return current.value;
			case 2: throw current.error;
			case 0: throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
		}
	}, {
		equal: options?.equal,
		...ngDevMode ? createDebugNameObject(options?.debugName, "source") : void 0
	});
}
function makeToSignalEqual(userEquality = Object.is) {
	return (a, b) => a.kind === 1 && b.kind === 1 && userEquality(a.value, b.value);
}
function createDebugNameObject(toSignalDebugName, internalSignalDebugName) {
	return { debugName: `toSignal${toSignalDebugName ? "#" + toSignalDebugName : ""}.${internalSignalDebugName}` };
}
//#endregion
export { outputToObservable as n, toSignal as r, outputFromObservable as t };
