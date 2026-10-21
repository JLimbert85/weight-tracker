import { $n as Output, Bt as computed, Da as ɵɵcontentQuerySignal, Dr as ViewEncapsulation, Ec as InjectionToken, En as ElementRef, Fc as NgZone, In as Input, Lc as PLATFORM_ID, Mr as afterNextRender, Pl as ɵɵnamespaceSVG, S as ViewChild, T as afterRenderEffect, Wi as setClassMetadata, X as input, Yo as ɵɵlistener, _s as ɵɵqueryAdvance, a as ContentChildren, an as ChangeDetectionStrategy, as as ɵɵprojectionDef, at as output, ba as ɵɵclassMap, cc as ɵɵviewQuerySignal, cn as Component, da as ɵɵadvance, do as ɵɵdomElementEnd, fo as ɵɵdomElementStart, gt as viewChild, ha as ɵɵanimateLeaveListener, hc as DestroyRef, is as ɵɵprojection, j as contentChildren, no as ɵɵdefineDirective, nt as model, pa as ɵɵanimateEnterListener, r as ChangeDetectorRef, rl as forwardRef, sl as inject, so as ɵɵdomElement, tl as effect, to as ɵɵdefineComponent, ua as ɵɵProvidersFeature, wn as Directive, xa as ɵɵclassProp, xl as signal, ya as ɵɵattribute } from "./core-CVHS-hD8.js";
import { tn as merge, vn as map } from "./esm5-ChK3bs0s.js";
import { i as isPlatformBrowser } from "./common-BYydZyTD.js";
import { NG_VALUE_ACCESSOR } from "./@angular_forms.js";
import { d as MatIconButton, r as MatButton } from "./button-DHN4twQo.js";
import { t as SelectionModel } from "./_selection-model-chunk-DOms3Uqj.js";
import { MatMenu, MatMenuTrigger } from "./@angular_material_menu.js";
import { r as toSignal } from "./rxjs-interop-Cy3FGZq0.js";
//#region node_modules/gsap/gsap-core.js
function _assertThisInitialized(self) {
	if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	return self;
}
function _inheritsLoose(subClass, superClass) {
	subClass.prototype = Object.create(superClass.prototype);
	subClass.prototype.constructor = subClass;
	subClass.__proto__ = superClass;
}
/*!
* GSAP 3.15.0
* https://gsap.com
*
* @license Copyright 2008-2026, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license
* @author: Jack Doyle, jack@greensock.com
*/
var _config = {
	autoSleep: 120,
	force3D: "auto",
	nullTargetWarn: 1,
	units: { lineHeight: "" }
};
var _defaults = {
	duration: .5,
	overwrite: false,
	delay: 0
};
var _suppressOverwrites;
var _reverting$2;
var _context;
var _bigNum$3 = 1e8;
var _tinyNum = 1 / _bigNum$3;
var _2PI$1 = Math.PI * 2;
var _HALF_PI = _2PI$1 / 4;
var _gsID = 0;
var _sqrt$2 = Math.sqrt;
var _cos$2 = Math.cos;
var _sin$2 = Math.sin;
var _isString$1 = function _isString(value) {
	return typeof value === "string";
};
var _isFunction$1 = function _isFunction(value) {
	return typeof value === "function";
};
var _isNumber$1 = function _isNumber(value) {
	return typeof value === "number";
};
var _isUndefined = function _isUndefined(value) {
	return typeof value === "undefined";
};
var _isObject = function _isObject(value) {
	return typeof value === "object";
};
var _isNotFalse = function _isNotFalse(value) {
	return value !== false;
};
var _windowExists$1 = function _windowExists() {
	return typeof window !== "undefined";
};
var _isFuncOrString = function _isFuncOrString(value) {
	return _isFunction$1(value) || _isString$1(value);
};
var _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {};
var _isArray = Array.isArray;
var _randomExp = /random\([^)]+\)/g;
var _commaDelimExp = /,\s*/g;
var _strictNumExp = /(?:-?\.?\d|\.)+/gi;
var _numExp$2 = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
var _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
var _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
var _relExp = /[+-]=-?[.\d]+/;
var _delimitedValueExp = /[^,'"\[\]\s]+/gi;
var _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
var _globalTimeline;
var _win$1;
var _coreInitted$2;
var _doc$1;
var _globals = {};
var _installScope = {};
var _coreReady;
var _install = function _install(scope) {
	return (_installScope = _merge(scope, _globals)) && gsap$2;
};
var _missingPlugin = function _missingPlugin(property, value) {
	return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
};
var _warn = function _warn(message, suppress) {
	return !suppress && console.warn(message);
};
var _addGlobal = function _addGlobal(name, obj) {
	return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
};
var _emptyFunc = function _emptyFunc() {
	return 0;
};
var _startAtRevertConfig = {
	suppressEvents: true,
	isStart: true,
	kill: false
};
var _revertConfigNoKill = {
	suppressEvents: true,
	kill: false
};
var _revertConfig = { suppressEvents: true };
var _reservedProps = {};
var _lazyTweens = [];
var _lazyLookup = {};
var _lastRenderedFrame;
var _plugins = {};
var _effects = {};
var _nextGCFrame = 30;
var _harnessPlugins = [];
var _callbackNames = "";
var _harness = function _harness(targets) {
	var target = targets[0], harnessPlugin, i;
	_isObject(target) || _isFunction$1(target) || (targets = [targets]);
	if (!(harnessPlugin = (target._gsap || {}).harness)) {
		i = _harnessPlugins.length;
		while (i-- && !_harnessPlugins[i].targetTest(target));
		harnessPlugin = _harnessPlugins[i];
	}
	i = targets.length;
	while (i--) targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
	return targets;
};
var _getCache = function _getCache(target) {
	return target._gsap || _harness(toArray(target))[0]._gsap;
};
var _getProperty = function _getProperty(target, property, v) {
	return (v = target[property]) && _isFunction$1(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
};
var _forEachName = function _forEachName(names, func) {
	return (names = names.split(",")).forEach(func) || names;
};
var _round$3 = function _round(value) {
	return Math.round(value * 1e5) / 1e5 || 0;
};
var _roundPrecise = function _roundPrecise(value) {
	return Math.round(value * 1e7) / 1e7 || 0;
};
var _parseRelative = function _parseRelative(start, value) {
	var operator = value.charAt(0), end = parseFloat(value.substr(2));
	start = parseFloat(start);
	return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
};
var _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
	var l = toFind.length, i = 0;
	for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;);
	return i < l;
};
var _lazyRender = function _lazyRender() {
	var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
	_lazyLookup = {};
	_lazyTweens.length = 0;
	for (i = 0; i < l; i++) {
		tween = a[i];
		tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
	}
};
var _isRevertWorthy = function _isRevertWorthy(animation) {
	return !!(animation._initted || animation._startAt || animation.add);
};
var _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
	_lazyTweens.length && !_reverting$2 && _lazyRender();
	animation.render(time, suppressEvents, force || !!(_reverting$2 && time < 0 && _isRevertWorthy(animation)));
	_lazyTweens.length && !_reverting$2 && _lazyRender();
};
var _numericIfPossible = function _numericIfPossible(value) {
	var n = parseFloat(value);
	return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString$1(value) ? value.trim() : value;
};
var _passThrough = function _passThrough(p) {
	return p;
};
var _setDefaults = function _setDefaults(obj, defaults) {
	for (var p in defaults) p in obj || (obj[p] = defaults[p]);
	return obj;
};
var _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
	return function(obj, defaults) {
		for (var p in defaults) p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
	};
};
var _merge = function _merge(base, toMerge) {
	for (var p in toMerge) base[p] = toMerge[p];
	return base;
};
var _mergeDeep = function _mergeDeep(base, toMerge) {
	for (var p in toMerge) p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
	return base;
};
var _copyExcluding = function _copyExcluding(obj, excluding) {
	var copy = {}, p;
	for (p in obj) p in excluding || (copy[p] = obj[p]);
	return copy;
};
var _inheritDefaults = function _inheritDefaults(vars) {
	var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
	if (_isNotFalse(vars.inherit)) while (parent) {
		func(vars, parent.vars.defaults);
		parent = parent.parent || parent._dp;
	}
	return vars;
};
var _arraysMatch = function _arraysMatch(a1, a2) {
	var i = a1.length, match = i === a2.length;
	while (match && i-- && a1[i] === a2[i]);
	return i < 0;
};
var _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
	if (firstProp === void 0) firstProp = "_first";
	if (lastProp === void 0) lastProp = "_last";
	var prev = parent[lastProp], t;
	if (sortBy) {
		t = child[sortBy];
		while (prev && prev[sortBy] > t) prev = prev._prev;
	}
	if (prev) {
		child._next = prev._next;
		prev._next = child;
	} else {
		child._next = parent[firstProp];
		parent[firstProp] = child;
	}
	if (child._next) child._next._prev = child;
	else parent[lastProp] = child;
	child._prev = prev;
	child.parent = child._dp = parent;
	return child;
};
var _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
	if (firstProp === void 0) firstProp = "_first";
	if (lastProp === void 0) lastProp = "_last";
	var prev = child._prev, next = child._next;
	if (prev) prev._next = next;
	else if (parent[firstProp] === child) parent[firstProp] = next;
	if (next) next._prev = prev;
	else if (parent[lastProp] === child) parent[lastProp] = prev;
	child._next = child._prev = child.parent = null;
};
var _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
	child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
	child._act = 0;
};
var _uncache = function _uncache(animation, child) {
	if (animation && (!child || child._end > animation._dur || child._start < 0)) {
		var a = animation;
		while (a) {
			a._dirty = 1;
			a = a.parent;
		}
	}
	return animation;
};
var _recacheAncestors = function _recacheAncestors(animation) {
	var parent = animation.parent;
	while (parent && parent.parent) {
		parent._dirty = 1;
		parent.totalDuration();
		parent = parent.parent;
	}
	return animation;
};
var _rewindStartAt = function _rewindStartAt(tween, totalTime, suppressEvents, force) {
	return tween._startAt && (_reverting$2 ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
};
var _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
	return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
};
var _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
	return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
};
var _animationCycle = function _animationCycle(tTime, cycleDuration) {
	var whole = Math.floor(tTime = _roundPrecise(tTime / cycleDuration));
	return tTime && whole === tTime ? whole - 1 : whole;
};
var _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
	return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
};
var _setEnd = function _setEnd(animation) {
	return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
};
var _alignPlayhead = function _alignPlayhead(animation, totalTime) {
	var parent = animation._dp;
	if (parent && parent.smoothChildTiming && animation._ts) {
		animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
		_setEnd(animation);
		parent._dirty || _uncache(parent, animation);
	}
	return animation;
};
var _postAddChecks = function _postAddChecks(timeline, child) {
	var t;
	if (child._time || !child._dur && child._initted || child._start < timeline._time && (child._dur || !child.add)) {
		t = _parentToChildTotalTime(timeline.rawTime(), child);
		if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) child.render(t, true);
	}
	if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
		if (timeline._dur < timeline.duration()) {
			t = timeline;
			while (t._dp) {
				t.rawTime() >= 0 && t.totalTime(t._tTime);
				t = t._dp;
			}
		}
		timeline._zTime = -_tinyNum;
	}
};
var _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
	child.parent && _removeFromParent(child);
	child._start = _roundPrecise((_isNumber$1(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
	child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
	_addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
	_isFromOrFromStart(child) || (timeline._recent = child);
	skipChecks || _postAddChecks(timeline, child);
	timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime);
	return timeline;
};
var _scrollTrigger = function _scrollTrigger(animation, trigger) {
	return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
};
var _attemptInitTween = function _attemptInitTween(tween, time, force, suppressEvents, tTime) {
	_initTween(tween, time, tTime);
	if (!tween._initted) return 1;
	if (!force && tween._pt && !_reverting$2 && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
		_lazyTweens.push(tween);
		tween._lazy = [tTime, suppressEvents];
		return 1;
	}
};
var _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
	var parent = _ref.parent;
	return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
};
var _isFromOrFromStart = function _isFromOrFromStart(_ref2) {
	var data = _ref2.data;
	return data === "isFromStart" || data === "isStart";
};
var _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
	var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
	if (repeatDelay && tween._repeat) {
		tTime = _clamp(0, tween._tDur, totalTime);
		iteration = _animationCycle(tTime, repeatDelay);
		tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
		if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
			prevRatio = 1 - ratio;
			tween.vars.repeatRefresh && tween._initted && tween.invalidate();
		}
	}
	if (ratio !== prevRatio || _reverting$2 || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
		if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) return;
		prevIteration = tween._zTime;
		tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
		suppressEvents || (suppressEvents = totalTime && !prevIteration);
		tween.ratio = ratio;
		tween._from && (ratio = 1 - ratio);
		tween._time = 0;
		tween._tTime = tTime;
		pt = tween._pt;
		while (pt) {
			pt.r(ratio, pt.d);
			pt = pt._next;
		}
		totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
		tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
		tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
		if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
			ratio && _removeFromParent(tween, 1);
			if (!suppressEvents && !_reverting$2) {
				_callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
				tween._prom && tween._prom();
			}
		}
	} else if (!tween._zTime) tween._zTime = totalTime;
};
var _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
	var child;
	if (time > prevTime) {
		child = animation._first;
		while (child && child._start <= time) {
			if (child.data === "isPause" && child._start > prevTime) return child;
			child = child._next;
		}
	} else {
		child = animation._last;
		while (child && child._start >= time) {
			if (child.data === "isPause" && child._start < prevTime) return child;
			child = child._prev;
		}
	}
};
var _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
	var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
	totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
	animation._dur = dur;
	animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
	totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
	animation.parent && _setEnd(animation);
	skipUncache || _uncache(animation.parent, animation);
	return animation;
};
var _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
	return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
};
var _zeroPosition = {
	_start: 0,
	endTime: _emptyFunc,
	totalDuration: _emptyFunc
};
var _parsePosition = function _parsePosition(animation, position, percentAnimation) {
	var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum$3 ? recent.endTime(false) : animation._dur, i, offset, isPercent;
	if (_isString$1(position) && (isNaN(position) || position in labels)) {
		offset = position.charAt(0);
		isPercent = position.substr(-1) === "%";
		i = position.indexOf("=");
		if (offset === "<" || offset === ">") {
			i >= 0 && (position = position.replace(/=/, ""));
			return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
		}
		if (i < 0) {
			position in labels || (labels[position] = clippedDuration);
			return labels[position];
		}
		offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
		if (isPercent && percentAnimation) offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
		return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
	}
	return position == null ? clippedDuration : +position;
};
var _createTweenType = function _createTweenType(type, params, timeline) {
	var isLegacy = _isNumber$1(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
	isLegacy && (vars.duration = params[1]);
	vars.parent = timeline;
	if (type) {
		irVars = vars;
		parent = timeline;
		while (parent && !("immediateRender" in irVars)) {
			irVars = parent.vars.defaults || {};
			parent = _isNotFalse(parent.vars.inherit) && parent.parent;
		}
		vars.immediateRender = _isNotFalse(irVars.immediateRender);
		type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
	}
	return new Tween(params[0], vars, params[varsIndex + 1]);
};
var _conditionalReturn = function _conditionalReturn(value, func) {
	return value || value === 0 ? func(value) : func;
};
var _clamp = function _clamp(min, max, value) {
	return value < min ? min : value > max ? max : value;
};
var getUnit = function getUnit(value, v) {
	return !_isString$1(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
};
var clamp = function clamp(min, max, value) {
	return _conditionalReturn(value, function(v) {
		return _clamp(min, max, v);
	});
};
var _slice = [].slice;
var _isArrayLike = function _isArrayLike(value, nonEmpty) {
	return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win$1;
};
var _flatten = function _flatten(ar, leaveStrings, accumulator) {
	if (accumulator === void 0) accumulator = [];
	return ar.forEach(function(value) {
		var _accumulator;
		return _isString$1(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
	}) || accumulator;
};
var toArray = function toArray(value, scope, leaveStrings) {
	return _context && !scope && _context.selector ? _context.selector(value) : _isString$1(value) && !leaveStrings && (_coreInitted$2 || !_wake()) ? _slice.call((scope || _doc$1).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
};
var selector = function selector(value) {
	value = toArray(value)[0] || _warn("Invalid scope") || {};
	return function(v) {
		var el = value.current || value.nativeElement || value;
		return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc$1.createElement("div") : value);
	};
};
var shuffle = function shuffle(a) {
	return a.sort(function() {
		return .5 - Math.random();
	});
};
var distribute = function distribute(v) {
	if (_isFunction$1(v)) return v;
	var vars = _isObject(v) ? v : { each: v }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
	if (_isString$1(from)) ratioX = ratioY = {
		center: .5,
		edges: .5,
		end: 1
	}[from] || 0;
	else if (!isDecimal && ratios) {
		ratioX = from[0];
		ratioY = from[1];
	}
	return function(i, target, a) {
		var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
		if (!distances) {
			wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum$3])[1];
			if (!wrapAt) {
				max = -_bigNum$3;
				while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l);
				wrapAt < l && wrapAt--;
			}
			distances = cache[l] = [];
			originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
			originY = wrapAt === _bigNum$3 ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
			max = 0;
			min = _bigNum$3;
			for (j = 0; j < l; j++) {
				x = j % wrapAt - originX;
				y = originY - (j / wrapAt | 0);
				distances[j] = d = !axis ? _sqrt$2(x * x + y * y) : Math.abs(axis === "y" ? y : x);
				d > max && (max = d);
				d < min && (min = d);
			}
			from === "random" && shuffle(distances);
			distances.max = max - min;
			distances.min = min;
			distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
			distances.b = l < 0 ? base - l : base;
			distances.u = getUnit(vars.amount || vars.each) || 0;
			ease = ease && l < 0 ? _invertEase(ease) : ease;
		}
		l = (distances[i] - distances.min) / distances.max || 0;
		return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
	};
};
var _roundModifier = function _roundModifier(v) {
	var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
	return function(raw) {
		var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
		return (n - n % 1) / p + (_isNumber$1(raw) ? 0 : getUnit(raw));
	};
};
var snap = function snap(snapTo, value) {
	var isArray = _isArray(snapTo), radius, is2D;
	if (!isArray && _isObject(snapTo)) {
		radius = isArray = snapTo.radius || _bigNum$3;
		if (snapTo.values) {
			snapTo = toArray(snapTo.values);
			if (is2D = !_isNumber$1(snapTo[0])) radius *= radius;
		} else snapTo = _roundModifier(snapTo.increment);
	}
	return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction$1(snapTo) ? function(raw) {
		is2D = snapTo(raw);
		return Math.abs(is2D - raw) <= radius ? is2D : raw;
	} : function(raw) {
		var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum$3, closest = 0, i = snapTo.length, dx, dy;
		while (i--) {
			if (is2D) {
				dx = snapTo[i].x - x;
				dy = snapTo[i].y - y;
				dx = dx * dx + dy * dy;
			} else dx = Math.abs(snapTo[i] - x);
			if (dx < min) {
				min = dx;
				closest = i;
			}
		}
		closest = !radius || min <= radius ? snapTo[closest] : raw;
		return is2D || closest === raw || _isNumber$1(raw) ? closest : closest + getUnit(raw);
	});
};
var random = function random(min, max, roundingIncrement, returnFunction) {
	return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
		return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
	});
};
var pipe = function pipe() {
	for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) functions[_key] = arguments[_key];
	return function(value) {
		return functions.reduce(function(v, f) {
			return f(v);
		}, value);
	};
};
var unitize = function unitize(func, unit) {
	return function(value) {
		return func(parseFloat(value)) + (unit || getUnit(value));
	};
};
var normalize = function normalize(min, max, value) {
	return mapRange(min, max, 0, 1, value);
};
var _wrapArray = function _wrapArray(a, wrapper, value) {
	return _conditionalReturn(value, function(index) {
		return a[~~wrapper(index)];
	});
};
var wrap = function wrap(min, max, value) {
	var range = max - min;
	return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function(value) {
		return (range + (value - min) % range) % range + min;
	});
};
var wrapYoyo = function wrapYoyo(min, max, value) {
	var range = max - min, total = range * 2;
	return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function(value) {
		value = (total + (value - min) % total) % total || 0;
		return min + (value > range ? total - value : value);
	});
};
var _replaceRandom = function _replaceRandom(s) {
	return s.replace(_randomExp, function(match) {
		var arIndex = match.indexOf("[") + 1, values = match.substring(arIndex || 7, arIndex ? match.indexOf("]") : match.length - 1).split(_commaDelimExp);
		return random(arIndex ? values : +values[0], arIndex ? 0 : +values[1], +values[2] || 1e-5);
	});
};
var mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
	var inRange = inMax - inMin, outRange = outMax - outMin;
	return _conditionalReturn(value, function(value) {
		return outMin + ((value - inMin) / inRange * outRange || 0);
	});
};
var interpolate = function interpolate(start, end, progress, mutate) {
	var func = isNaN(start + end) ? 0 : function(p) {
		return (1 - p) * start + p * end;
	};
	if (!func) {
		var isString = _isString$1(start), master = {}, p, i, interpolators, l, il;
		progress === true && (mutate = 1) && (progress = null);
		if (isString) {
			start = { p: start };
			end = { p: end };
		} else if (_isArray(start) && !_isArray(end)) {
			interpolators = [];
			l = start.length;
			il = l - 2;
			for (i = 1; i < l; i++) interpolators.push(interpolate(start[i - 1], start[i]));
			l--;
			func = function func(p) {
				p *= l;
				var i = Math.min(il, ~~p);
				return interpolators[i](p - i);
			};
			progress = end;
		} else if (!mutate) start = _merge(_isArray(start) ? [] : {}, start);
		if (!interpolators) {
			for (p in end) _addPropTween.call(master, start, p, "get", end[p]);
			func = function func(p) {
				return _renderPropTweens(p, master) || (isString ? start.p : start);
			};
		}
	}
	return _conditionalReturn(progress, func);
};
var _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
	var labels = timeline.labels, min = _bigNum$3, p, distance, label;
	for (p in labels) {
		distance = labels[p] - fromTime;
		if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
			label = p;
			min = distance;
		}
	}
	return label;
};
var _callback = function _callback(animation, type, executeLazyFirst) {
	var v = animation.vars, callback = v[type], prevContext = _context, context = animation._ctx, params, scope, result;
	if (!callback) return;
	params = v[type + "Params"];
	scope = v.callbackScope || animation;
	executeLazyFirst && _lazyTweens.length && _lazyRender();
	context && (_context = context);
	result = params ? callback.apply(scope, params) : callback.call(scope);
	_context = prevContext;
	return result;
};
var _interrupt = function _interrupt(animation) {
	_removeFromParent(animation);
	animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting$2);
	animation.progress() < 1 && _callback(animation, "onInterrupt");
	return animation;
};
var _quickTween;
var _registerPluginQueue = [];
var _createPlugin = function _createPlugin(config) {
	if (!config) return;
	config = !config.name && config["default"] || config;
	if (_windowExists$1() || config.headless) {
		var name = config.name, isFunc = _isFunction$1(config), Plugin = name && !isFunc && config.init ? function() {
			this._props = [];
		} : config, instanceDefaults = {
			init: _emptyFunc,
			render: _renderPropTweens,
			add: _addPropTween,
			kill: _killPropTweensOf,
			modifier: _addPluginModifier,
			rawVars: 0
		}, statics = {
			targetTest: 0,
			get: 0,
			getSetter: _getSetter,
			aliases: {},
			register: 0
		};
		_wake();
		if (config !== Plugin) {
			if (_plugins[name]) return;
			_setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics));
			_merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics)));
			_plugins[Plugin.prop = name] = Plugin;
			if (config.targetTest) {
				_harnessPlugins.push(Plugin);
				_reservedProps[name] = 1;
			}
			name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
		}
		_addGlobal(name, Plugin);
		config.register && config.register(gsap$2, Plugin, PropTween);
	} else _registerPluginQueue.push(config);
};
var _255 = 255;
var _colorLookup = {
	aqua: [
		0,
		_255,
		_255
	],
	lime: [
		0,
		_255,
		0
	],
	silver: [
		192,
		192,
		192
	],
	black: [
		0,
		0,
		0
	],
	maroon: [
		128,
		0,
		0
	],
	teal: [
		0,
		128,
		128
	],
	blue: [
		0,
		0,
		_255
	],
	navy: [
		0,
		0,
		128
	],
	white: [
		_255,
		_255,
		_255
	],
	olive: [
		128,
		128,
		0
	],
	yellow: [
		_255,
		_255,
		0
	],
	orange: [
		_255,
		165,
		0
	],
	gray: [
		128,
		128,
		128
	],
	purple: [
		128,
		0,
		128
	],
	green: [
		0,
		128,
		0
	],
	red: [
		_255,
		0,
		0
	],
	pink: [
		_255,
		192,
		203
	],
	cyan: [
		0,
		_255,
		_255
	],
	transparent: [
		_255,
		_255,
		_255,
		0
	]
};
var _hue = function _hue(h, m1, m2) {
	h += h < 0 ? 1 : h > 1 ? -1 : 0;
	return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
};
var splitColor = function splitColor(v, toHSL, forceAlpha) {
	var a = !v ? _colorLookup.black : _isNumber$1(v) ? [
		v >> 16,
		v >> 8 & _255,
		v & _255
	] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
	if (!a) {
		if (v.substr(-1) === ",") v = v.substr(0, v.length - 1);
		if (_colorLookup[v]) a = _colorLookup[v];
		else if (v.charAt(0) === "#") {
			if (v.length < 6) {
				r = v.charAt(1);
				g = v.charAt(2);
				b = v.charAt(3);
				v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
			}
			if (v.length === 9) {
				a = parseInt(v.substr(1, 6), 16);
				return [
					a >> 16,
					a >> 8 & _255,
					a & _255,
					parseInt(v.substr(7), 16) / 255
				];
			}
			v = parseInt(v.substr(1), 16);
			a = [
				v >> 16,
				v >> 8 & _255,
				v & _255
			];
		} else if (v.substr(0, 3) === "hsl") {
			a = wasHSL = v.match(_strictNumExp);
			if (!toHSL) {
				h = +a[0] % 360 / 360;
				s = +a[1] / 100;
				l = +a[2] / 100;
				g = l <= .5 ? l * (s + 1) : l + s - l * s;
				r = l * 2 - g;
				a.length > 3 && (a[3] *= 1);
				a[0] = _hue(h + 1 / 3, r, g);
				a[1] = _hue(h, r, g);
				a[2] = _hue(h - 1 / 3, r, g);
			} else if (~v.indexOf("=")) {
				a = v.match(_numExp$2);
				forceAlpha && a.length < 4 && (a[3] = 1);
				return a;
			}
		} else a = v.match(_strictNumExp) || _colorLookup.transparent;
		a = a.map(Number);
	}
	if (toHSL && !wasHSL) {
		r = a[0] / _255;
		g = a[1] / _255;
		b = a[2] / _255;
		max = Math.max(r, g, b);
		min = Math.min(r, g, b);
		l = (max + min) / 2;
		if (max === min) h = s = 0;
		else {
			d = max - min;
			s = l > .5 ? d / (2 - max - min) : d / (max + min);
			h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
			h *= 60;
		}
		a[0] = ~~(h + .5);
		a[1] = ~~(s * 100 + .5);
		a[2] = ~~(l * 100 + .5);
	}
	forceAlpha && a.length < 4 && (a[3] = 1);
	return a;
};
var _colorOrderData = function _colorOrderData(v) {
	var values = [], c = [], i = -1;
	v.split(_colorExp).forEach(function(v) {
		var a = v.match(_numWithUnitExp) || [];
		values.push.apply(values, a);
		c.push(i += a.length + 1);
	});
	values.c = c;
	return values;
};
var _formatColors = function _formatColors(s, toHSL, orderMatchData) {
	var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
	if (!colors) return s;
	colors = colors.map(function(color) {
		return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
	});
	if (orderMatchData) {
		d = _colorOrderData(s);
		c = orderMatchData.c;
		if (c.join(result) !== d.c.join(result)) {
			shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
			l = shell.length - 1;
			for (; i < l; i++) result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
		}
	}
	if (!shell) {
		shell = s.split(_colorExp);
		l = shell.length - 1;
		for (; i < l; i++) result += shell[i] + colors[i];
	}
	return result + shell[l];
};
var _colorExp = function() {
	var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
	for (p in _colorLookup) s += "|" + p + "\\b";
	return new RegExp(s + ")", "gi");
}();
var _hslExp = /hsl[a]?\(/;
var _colorStringFilter = function _colorStringFilter(a) {
	var combined = a.join(" "), toHSL;
	_colorExp.lastIndex = 0;
	if (_colorExp.test(combined)) {
		toHSL = _hslExp.test(combined);
		a[1] = _formatColors(a[1], toHSL);
		a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
		return true;
	}
};
var _tickerActive;
var _ticker = function() {
	var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners = [], _id, _req, _raf, _self, _delta, _i, _tick = function _tick(v) {
		var elapsed = _getTime() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
		(elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
		_lastUpdate += elapsed;
		time = _lastUpdate - _startTime;
		overlap = time - _nextTime;
		if (overlap > 0 || manual) {
			frame = ++_self.frame;
			_delta = time - _self.time * 1e3;
			_self.time = time = time / 1e3;
			_nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
			dispatch = 1;
		}
		manual || (_id = _req(_tick));
		if (dispatch) for (_i = 0; _i < _listeners.length; _i++) _listeners[_i](time, _delta, frame, v);
	};
	_self = {
		time: 0,
		frame: 0,
		tick: function tick() {
			_tick(true);
		},
		deltaRatio: function deltaRatio(fps) {
			return _delta / (1e3 / (fps || 60));
		},
		wake: function wake() {
			if (_coreReady) {
				if (!_coreInitted$2 && _windowExists$1()) {
					_win$1 = _coreInitted$2 = window;
					_doc$1 = _win$1.document || {};
					_globals.gsap = gsap$2;
					(_win$1.gsapVersions || (_win$1.gsapVersions = [])).push(gsap$2.version);
					_install(_installScope || _win$1.GreenSockGlobals || !_win$1.gsap && _win$1 || {});
					_registerPluginQueue.forEach(_createPlugin);
				}
				_raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
				_id && _self.sleep();
				_req = _raf || function(f) {
					return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
				};
				_tickerActive = 1;
				_tick(2);
			}
		},
		sleep: function sleep() {
			(_raf ? cancelAnimationFrame : clearTimeout)(_id);
			_tickerActive = 0;
			_req = _emptyFunc;
		},
		lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
			_lagThreshold = threshold || Infinity;
			_adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
		},
		fps: function fps(_fps) {
			_gap = 1e3 / (_fps || 240);
			_nextTime = _self.time * 1e3 + _gap;
		},
		add: function add(callback, once, prioritize) {
			var func = once ? function(t, d, f, v) {
				callback(t, d, f, v);
				_self.remove(func);
			} : callback;
			_self.remove(callback);
			_listeners[prioritize ? "unshift" : "push"](func);
			_wake();
			return func;
		},
		remove: function remove(callback, i) {
			~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
		},
		_listeners
	};
	return _self;
}();
var _wake = function _wake() {
	return !_tickerActive && _ticker.wake();
};
var _easeMap = {};
var _customEaseExp = /^[\d.\-M][\d.\-,\s]/;
var _quotesExp = /["']/g;
var _parseObjectInString = function _parseObjectInString(value) {
	var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
	for (; i < l; i++) {
		val = split[i];
		index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
		parsedVal = val.substr(0, index);
		obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
		key = val.substr(index + 1).trim();
	}
	return obj;
};
var _valueInParentheses = function _valueInParentheses(value) {
	var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
	return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
};
var _configEaseFromString = function _configEaseFromString(name) {
	var split = (name + "").split("("), ease = _easeMap[split[0]];
	return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
};
var _invertEase = function _invertEase(ease) {
	return function(p) {
		return 1 - ease(1 - p);
	};
};
var _parseEase = function _parseEase(ease, defaultEase) {
	return !ease ? defaultEase : (_isFunction$1(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
};
var _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
	if (easeOut === void 0) easeOut = function easeOut(p) {
		return 1 - easeIn(1 - p);
	};
	if (easeInOut === void 0) easeInOut = function easeInOut(p) {
		return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
	};
	var ease = {
		easeIn,
		easeOut,
		easeInOut
	}, lowercaseName;
	_forEachName(names, function(name) {
		_easeMap[name] = _globals[name] = ease;
		_easeMap[lowercaseName = name.toLowerCase()] = easeOut;
		for (var p in ease) _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
	});
	return ease;
};
var _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
	return function(p) {
		return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
	};
};
var _configElastic = function _configElastic(type, amplitude, period) {
	var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI$1 * (Math.asin(1 / p1) || 0), easeOut = function easeOut(p) {
		return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin$2((p - p3) * p2) + 1;
	}, ease = type === "out" ? easeOut : type === "in" ? function(p) {
		return 1 - easeOut(1 - p);
	} : _easeInOutFromOut(easeOut);
	p2 = _2PI$1 / p2;
	ease.config = function(amplitude, period) {
		return _configElastic(type, amplitude, period);
	};
	return ease;
};
var _configBack = function _configBack(type, overshoot) {
	if (overshoot === void 0) overshoot = 1.70158;
	var easeOut = function easeOut(p) {
		return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
	}, ease = type === "out" ? easeOut : type === "in" ? function(p) {
		return 1 - easeOut(1 - p);
	} : _easeInOutFromOut(easeOut);
	ease.config = function(overshoot) {
		return _configBack(type, overshoot);
	};
	return ease;
};
_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
	var power = i < 5 ? i + 1 : i;
	_insertEase(name + ",Power" + (power - 1), i ? function(p) {
		return Math.pow(p, power);
	} : function(p) {
		return p;
	}, function(p) {
		return 1 - Math.pow(1 - p, power);
	}, function(p) {
		return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
	});
});
_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
(function(n, c) {
	var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut(p) {
		return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
	};
	_insertEase("Bounce", function(p) {
		return 1 - easeOut(1 - p);
	}, easeOut);
})(7.5625, 2.75);
_insertEase("Expo", function(p) {
	return Math.pow(2, 10 * (p - 1)) * p + p * p * p * p * p * p * (1 - p);
});
_insertEase("Circ", function(p) {
	return -(_sqrt$2(1 - p * p) - 1);
});
_insertEase("Sine", function(p) {
	return p === 1 ? 1 : -_cos$2(p * _HALF_PI) + 1;
});
_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = { config: function config(steps, immediateStart) {
	if (steps === void 0) steps = 1;
	var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
	return function(p) {
		return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
	};
} };
_defaults.ease = _easeMap["quad.out"];
_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
	return _callbackNames += name + "," + name + "Params,";
});
var GSCache = function GSCache(target, harness) {
	this.id = _gsID++;
	target._gsap = this;
	this.target = target;
	this.harness = harness;
	this.get = harness ? harness.get : _getProperty;
	this.set = harness ? harness.getSetter : _getSetter;
};
var Animation = /*#__PURE__*/ function() {
	function Animation(vars) {
		this.vars = vars;
		this._delay = +vars.delay || 0;
		if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
			this._rDelay = vars.repeatDelay || 0;
			this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
		}
		this._ts = 1;
		_setDuration(this, +vars.duration, 1, 1);
		this.data = vars.data;
		if (_context) {
			this._ctx = _context;
			_context.data.push(this);
		}
		_tickerActive || _ticker.wake();
	}
	var _proto = Animation.prototype;
	_proto.delay = function delay(value) {
		if (value || value === 0) {
			this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
			this._delay = value;
			return this;
		}
		return this._delay;
	};
	_proto.duration = function duration(value) {
		return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
	};
	_proto.totalDuration = function totalDuration(value) {
		if (!arguments.length) return this._tDur;
		this._dirty = 0;
		return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
	};
	_proto.totalTime = function totalTime(_totalTime, suppressEvents) {
		_wake();
		if (!arguments.length) return this._tTime;
		var parent = this._dp;
		if (parent && parent.smoothChildTiming && this._ts) {
			_alignPlayhead(this, _totalTime);
			!parent._dp || parent.parent || _postAddChecks(parent, this);
			while (parent && parent.parent) {
				if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) parent.totalTime(parent._tTime, true);
				parent = parent.parent;
			}
			if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) _addToTimeline(this._dp, this, this._start - this._delay);
		}
		if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !this._initted && this._dur && _totalTime || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
			this._ts || (this._pTime = _totalTime);
			_lazySafeRender(this, _totalTime, suppressEvents);
		}
		return this;
	};
	_proto.time = function time(value, suppressEvents) {
		return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
	};
	_proto.totalProgress = function totalProgress(value, suppressEvents) {
		return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
	};
	_proto.progress = function progress(value, suppressEvents) {
		return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
	};
	_proto.iteration = function iteration(value, suppressEvents) {
		var cycleDuration = this.duration() + this._rDelay;
		return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
	};
	_proto.timeScale = function timeScale(value, suppressEvents) {
		if (!arguments.length) return this._rts === -_tinyNum ? 0 : this._rts;
		if (this._rts === value) return this;
		var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
		this._rts = +value || 0;
		this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
		this.totalTime(_clamp(-Math.abs(this._delay), this.totalDuration(), tTime), suppressEvents !== false);
		_setEnd(this);
		return _recacheAncestors(this);
	};
	_proto.paused = function paused(value) {
		if (!arguments.length) return this._ps;
		if (this._ps !== value) {
			this._ps = value;
			if (value) {
				this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
				this._ts = this._act = 0;
			} else {
				_wake();
				this._ts = this._rts;
				this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
			}
		}
		return this;
	};
	_proto.startTime = function startTime(value) {
		if (arguments.length) {
			this._start = _roundPrecise(value);
			var parent = this.parent || this._dp;
			parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, this._start - this._delay);
			return this;
		}
		return this._start;
	};
	_proto.endTime = function endTime(includeRepeats) {
		return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
	};
	_proto.rawTime = function rawTime(wrapRepeats) {
		var parent = this.parent || this._dp;
		return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
	};
	_proto.revert = function revert(config) {
		if (config === void 0) config = _revertConfig;
		var prevIsReverting = _reverting$2;
		_reverting$2 = config;
		if (_isRevertWorthy(this)) {
			this.timeline && this.timeline.revert(config);
			this.totalTime(-.01, config.suppressEvents);
		}
		this.data !== "nested" && config.kill !== false && this.kill();
		_reverting$2 = prevIsReverting;
		return this;
	};
	_proto.globalTime = function globalTime(rawTime) {
		var animation = this, time = arguments.length ? rawTime : animation.rawTime();
		while (animation) {
			time = animation._start + time / (Math.abs(animation._ts) || 1);
			animation = animation._dp;
		}
		return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time;
	};
	_proto.repeat = function repeat(value) {
		if (arguments.length) {
			this._repeat = value === Infinity ? -2 : value;
			return _onUpdateTotalDuration(this);
		}
		return this._repeat === -2 ? Infinity : this._repeat;
	};
	_proto.repeatDelay = function repeatDelay(value) {
		if (arguments.length) {
			var time = this._time;
			this._rDelay = value;
			_onUpdateTotalDuration(this);
			return time ? this.time(time) : this;
		}
		return this._rDelay;
	};
	_proto.yoyo = function yoyo(value) {
		if (arguments.length) {
			this._yoyo = value;
			return this;
		}
		return this._yoyo;
	};
	_proto.seek = function seek(position, suppressEvents) {
		return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
	};
	_proto.restart = function restart(includeDelay, suppressEvents) {
		this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
		this._dur || (this._zTime = -_tinyNum);
		return this;
	};
	_proto.play = function play(from, suppressEvents) {
		from != null && this.seek(from, suppressEvents);
		return this.reversed(false).paused(false);
	};
	_proto.reverse = function reverse(from, suppressEvents) {
		from != null && this.seek(from || this.totalDuration(), suppressEvents);
		return this.reversed(true).paused(false);
	};
	_proto.pause = function pause(atTime, suppressEvents) {
		atTime != null && this.seek(atTime, suppressEvents);
		return this.paused(true);
	};
	_proto.resume = function resume() {
		return this.paused(false);
	};
	_proto.reversed = function reversed(value) {
		if (arguments.length) {
			!!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
			return this;
		}
		return this._rts < 0;
	};
	_proto.invalidate = function invalidate() {
		this._initted = this._act = 0;
		this._zTime = -_tinyNum;
		return this;
	};
	_proto.isActive = function isActive() {
		var parent = this.parent || this._dp, start = this._start, rawTime;
		return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
	};
	_proto.eventCallback = function eventCallback(type, callback, params) {
		var vars = this.vars;
		if (arguments.length > 1) {
			if (!callback) delete vars[type];
			else {
				vars[type] = callback;
				params && (vars[type + "Params"] = params);
				type === "onUpdate" && (this._onUpdate = callback);
			}
			return this;
		}
		return vars[type];
	};
	_proto.then = function then(onFulfilled) {
		var self = this, prevProm = self._prom;
		return new Promise(function(resolve) {
			var f = _isFunction$1(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve() {
				var _then = self.then;
				self.then = null;
				prevProm && prevProm();
				_isFunction$1(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
				resolve(f);
				self.then = _then;
			};
			if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) _resolve();
			else self._prom = _resolve;
		});
	};
	_proto.kill = function kill() {
		_interrupt(this);
	};
	return Animation;
}();
_setDefaults(Animation.prototype, {
	_time: 0,
	_start: 0,
	_end: 0,
	_tTime: 0,
	_tDur: 0,
	_dirty: 0,
	_repeat: 0,
	_yoyo: false,
	parent: null,
	_initted: false,
	_rDelay: 0,
	_ts: 1,
	_dp: 0,
	ratio: 0,
	_zTime: -_tinyNum,
	_prom: 0,
	_ps: false,
	_rts: 1
});
var Timeline = /*#__PURE__*/ function(_Animation) {
	_inheritsLoose(Timeline, _Animation);
	function Timeline(vars, position) {
		var _this;
		if (vars === void 0) vars = {};
		_this = _Animation.call(this, vars) || this;
		_this.labels = {};
		_this.smoothChildTiming = !!vars.smoothChildTiming;
		_this.autoRemoveChildren = !!vars.autoRemoveChildren;
		_this._sort = _isNotFalse(vars.sortChildren);
		_globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
		vars.reversed && _this.reverse();
		vars.paused && _this.paused(true);
		vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
		return _this;
	}
	var _proto2 = Timeline.prototype;
	_proto2.to = function to(targets, vars, position) {
		_createTweenType(0, arguments, this);
		return this;
	};
	_proto2.from = function from(targets, vars, position) {
		_createTweenType(1, arguments, this);
		return this;
	};
	_proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
		_createTweenType(2, arguments, this);
		return this;
	};
	_proto2.set = function set(targets, vars, position) {
		vars.duration = 0;
		vars.parent = this;
		_inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
		vars.immediateRender = !!vars.immediateRender;
		new Tween(targets, vars, _parsePosition(this, position), 1);
		return this;
	};
	_proto2.call = function call(callback, params, position) {
		return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
	};
	_proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
		vars.duration = duration;
		vars.stagger = vars.stagger || stagger;
		vars.onComplete = onCompleteAll;
		vars.onCompleteParams = onCompleteAllParams;
		vars.parent = this;
		new Tween(targets, vars, _parsePosition(this, position));
		return this;
	};
	_proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
		vars.runBackwards = 1;
		_inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
		return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
	};
	_proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
		toVars.startAt = fromVars;
		_inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
		return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
	};
	_proto2.render = function render(totalTime, suppressEvents, force) {
		var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
		this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
		if (tTime !== this._tTime || force || crossingStart) {
			if (prevTime !== this._time && dur) {
				tTime += this._time - prevTime;
				totalTime += this._time - prevTime;
			}
			time = tTime;
			prevStart = this._start;
			timeScale = this._ts;
			prevPaused = !timeScale;
			if (crossingStart) {
				dur || (prevTime = this._zTime);
				(totalTime || !suppressEvents) && (this._zTime = totalTime);
			}
			if (this._repeat) {
				yoyo = this._yoyo;
				cycleDuration = dur + this._rDelay;
				if (this._repeat < -1 && totalTime < 0) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
				time = _roundPrecise(tTime % cycleDuration);
				if (tTime === tDur) {
					iteration = this._repeat;
					time = dur;
				} else {
					prevIteration = _roundPrecise(tTime / cycleDuration);
					iteration = ~~prevIteration;
					if (iteration && iteration === prevIteration) {
						time = dur;
						iteration--;
					}
					time > dur && (time = dur);
				}
				prevIteration = _animationCycle(this._tTime, cycleDuration);
				!prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration);
				if (yoyo && iteration & 1) {
					time = dur - time;
					isYoyo = 1;
				}
				if (iteration !== prevIteration && !this._lock) {
					var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
					iteration < prevIteration && (rewinding = !rewinding);
					prevTime = rewinding ? 0 : tTime % dur ? dur : tTime;
					this._lock = 1;
					this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
					this._tTime = tTime;
					!suppressEvents && this.parent && _callback(this, "onRepeat");
					if (this.vars.repeatRefresh && !isYoyo) {
						this.invalidate()._lock = 1;
						prevIteration = iteration;
					}
					if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
					dur = this._dur;
					tDur = this._tDur;
					if (doesWrap) {
						this._lock = 2;
						prevTime = rewinding ? dur : -1e-4;
						this.render(prevTime, true);
						this.vars.repeatRefresh && !isYoyo && this.invalidate();
					}
					this._lock = 0;
					if (!this._ts && !prevPaused) return this;
				}
			}
			if (this._hasPause && !this._forcing && this._lock < 2) {
				pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
				if (pauseTween) tTime -= time - (time = pauseTween._start);
			}
			this._tTime = tTime;
			this._time = time;
			this._act = !!timeScale;
			if (!this._initted) {
				this._onUpdate = this.vars.onUpdate;
				this._initted = 1;
				this._zTime = totalTime;
				prevTime = 0;
			}
			if (!prevTime && tTime && dur && !suppressEvents && !prevIteration) {
				_callback(this, "onStart");
				if (this._tTime !== tTime) return this;
			}
			if (time >= prevTime && totalTime >= 0) {
				child = this._first;
				while (child) {
					next = child._next;
					if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
						if (child.parent !== this) return this.render(totalTime, suppressEvents, force);
						child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
						if (time !== this._time || !this._ts && !prevPaused) {
							pauseTween = 0;
							next && (tTime += this._zTime = -_tinyNum);
							break;
						}
					}
					child = next;
				}
			} else {
				child = this._last;
				var adjustedTime = totalTime < 0 ? totalTime : time;
				while (child) {
					next = child._prev;
					if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
						if (child.parent !== this) return this.render(totalTime, suppressEvents, force);
						child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting$2 && _isRevertWorthy(child));
						if (time !== this._time || !this._ts && !prevPaused) {
							pauseTween = 0;
							next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
							break;
						}
					}
					child = next;
				}
			}
			if (pauseTween && !suppressEvents) {
				this.pause();
				pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
				if (this._ts) {
					this._start = prevStart;
					_setEnd(this);
					return this.render(totalTime, suppressEvents, force);
				}
			}
			this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
			if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
				if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
					if (!this._lock) {
						(totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
						if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
							_callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
							this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
						}
					}
				}
			}
		}
		return this;
	};
	_proto2.add = function add(child, position) {
		var _this2 = this;
		_isNumber$1(position) || (position = _parsePosition(this, position, child));
		if (!(child instanceof Animation)) {
			if (_isArray(child)) {
				child.forEach(function(obj) {
					return _this2.add(obj, position);
				});
				return this;
			}
			if (_isString$1(child)) return this.addLabel(child, position);
			if (_isFunction$1(child)) child = Tween.delayedCall(0, child);
			else return this;
		}
		return this !== child ? _addToTimeline(this, child, position) : this;
	};
	_proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
		if (nested === void 0) nested = true;
		if (tweens === void 0) tweens = true;
		if (timelines === void 0) timelines = true;
		if (ignoreBeforeTime === void 0) ignoreBeforeTime = -_bigNum$3;
		var a = [], child = this._first;
		while (child) {
			if (child._start >= ignoreBeforeTime) if (child instanceof Tween) tweens && a.push(child);
			else {
				timelines && a.push(child);
				nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
			}
			child = child._next;
		}
		return a;
	};
	_proto2.getById = function getById(id) {
		var animations = this.getChildren(1, 1, 1), i = animations.length;
		while (i--) if (animations[i].vars.id === id) return animations[i];
	};
	_proto2.remove = function remove(child) {
		if (_isString$1(child)) return this.removeLabel(child);
		if (_isFunction$1(child)) return this.killTweensOf(child);
		child.parent === this && _removeLinkedListItem(this, child);
		if (child === this._recent) this._recent = this._last;
		return _uncache(this);
	};
	_proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
		if (!arguments.length) return this._tTime;
		this._forcing = 1;
		if (!this._dp && this._ts) this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
		_Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
		this._forcing = 0;
		return this;
	};
	_proto2.addLabel = function addLabel(label, position) {
		this.labels[label] = _parsePosition(this, position);
		return this;
	};
	_proto2.removeLabel = function removeLabel(label) {
		delete this.labels[label];
		return this;
	};
	_proto2.addPause = function addPause(position, callback, params) {
		var t = Tween.delayedCall(0, callback || _emptyFunc, params);
		t.data = "isPause";
		this._hasPause = 1;
		return _addToTimeline(this, t, _parsePosition(this, position));
	};
	_proto2.removePause = function removePause(position) {
		var child = this._first;
		position = _parsePosition(this, position);
		while (child) {
			if (child._start === position && child.data === "isPause") _removeFromParent(child);
			child = child._next;
		}
	};
	_proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
		var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
		while (i--) _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
		return this;
	};
	_proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
		var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber$1(onlyActive), children;
		while (child) {
			if (child instanceof Tween) {
				if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) a.push(child);
			} else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) a.push.apply(a, children);
			child = child._next;
		}
		return a;
	};
	_proto2.tweenTo = function tweenTo(position, vars) {
		vars = vars || {};
		var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
			ease: vars.ease || "none",
			lazy: false,
			immediateRender: false,
			time: endTime,
			overwrite: "auto",
			duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
			onStart: function onStart() {
				tl.pause();
				if (!initted) {
					var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
					tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
					initted = 1;
				}
				_onStart && _onStart.apply(tween, onStartParams || []);
			}
		}, vars));
		return immediateRender ? tween.render(0) : tween;
	};
	_proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
		return this.tweenTo(toPosition, _setDefaults({ startAt: { time: _parsePosition(this, fromPosition) } }, vars));
	};
	_proto2.recent = function recent() {
		return this._recent;
	};
	_proto2.nextLabel = function nextLabel(afterTime) {
		if (afterTime === void 0) afterTime = this._time;
		return _getLabelInDirection(this, _parsePosition(this, afterTime));
	};
	_proto2.previousLabel = function previousLabel(beforeTime) {
		if (beforeTime === void 0) beforeTime = this._time;
		return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
	};
	_proto2.currentLabel = function currentLabel(value) {
		return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
	};
	_proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
		if (ignoreBeforeTime === void 0) ignoreBeforeTime = 0;
		var child = this._first, labels = this.labels, p;
		amount = _roundPrecise(amount);
		while (child) {
			if (child._start >= ignoreBeforeTime) {
				child._start += amount;
				child._end += amount;
			}
			child = child._next;
		}
		if (adjustLabels) {
			for (p in labels) if (labels[p] >= ignoreBeforeTime) labels[p] += amount;
		}
		return _uncache(this);
	};
	_proto2.invalidate = function invalidate(soft) {
		var child = this._first;
		this._lock = 0;
		while (child) {
			child.invalidate(soft);
			child = child._next;
		}
		return _Animation.prototype.invalidate.call(this, soft);
	};
	_proto2.clear = function clear(includeLabels) {
		if (includeLabels === void 0) includeLabels = true;
		var child = this._first, next;
		while (child) {
			next = child._next;
			this.remove(child);
			child = next;
		}
		this._dp && (this._time = this._tTime = this._pTime = 0);
		includeLabels && (this.labels = {});
		return _uncache(this);
	};
	_proto2.totalDuration = function totalDuration(value) {
		var max = 0, self = this, child = self._last, prevStart = _bigNum$3, prev, start, parent;
		if (arguments.length) return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
		if (self._dirty) {
			parent = self.parent;
			while (child) {
				prev = child._prev;
				child._dirty && child.totalDuration();
				start = child._start;
				if (start > prevStart && self._sort && child._ts && !self._lock) {
					self._lock = 1;
					_addToTimeline(self, child, start - child._delay, 1)._lock = 0;
				} else prevStart = start;
				if (start < 0 && child._ts) {
					max -= start;
					if (!parent && !self._dp || parent && parent.smoothChildTiming) {
						self._start += _roundPrecise(start / self._ts);
						self._time -= start;
						self._tTime -= start;
					}
					self.shiftChildren(-start, false, -Infinity);
					prevStart = 0;
				}
				child._end > max && child._ts && (max = child._end);
				child = prev;
			}
			_setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
			self._dirty = 0;
		}
		return self._tDur;
	};
	Timeline.updateRoot = function updateRoot(time) {
		if (_globalTimeline._ts) {
			_lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
			_lastRenderedFrame = _ticker.frame;
		}
		if (_ticker.frame >= _nextGCFrame) {
			_nextGCFrame += _config.autoSleep || 120;
			var child = _globalTimeline._first;
			if (!child || !child._ts) {
				if (_config.autoSleep && _ticker._listeners.length < 2) {
					while (child && !child._ts) child = child._next;
					child || _ticker.sleep();
				}
			}
		}
	};
	return Timeline;
}(Animation);
_setDefaults(Timeline.prototype, {
	_lock: 0,
	_hasPause: 0,
	_forcing: 0
});
var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
	var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
	pt.b = start;
	pt.e = end;
	start += "";
	end += "";
	if (hasRandom = ~end.indexOf("random(")) end = _replaceRandom(end);
	if (stringFilter) {
		a = [start, end];
		stringFilter(a, target, prop);
		start = a[0];
		end = a[1];
	}
	startNums = start.match(_complexStringNumExp) || [];
	while (result = _complexStringNumExp.exec(end)) {
		endNum = result[0];
		chunk = end.substring(index, result.index);
		if (color) color = (color + 1) % 5;
		else if (chunk.substr(-5) === "rgba(") color = 1;
		if (endNum !== startNums[matchIndex++]) {
			startNum = parseFloat(startNums[matchIndex - 1]) || 0;
			pt._pt = {
				_next: pt._pt,
				p: chunk || matchIndex === 1 ? chunk : ",",
				s: startNum,
				c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
				m: color && color < 4 ? Math.round : 0
			};
			index = _complexStringNumExp.lastIndex;
		}
	}
	pt.c = index < end.length ? end.substring(index, end.length) : "";
	pt.fp = funcParam;
	if (_relExp.test(end) || hasRandom) pt.e = 0;
	this._pt = pt;
	return pt;
};
var _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
	_isFunction$1(end) && (end = end(index || 0, target, targets));
	var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction$1(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction$1(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction$1(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
	if (_isString$1(end)) {
		if (~end.indexOf("random(")) end = _replaceRandom(end);
		if (end.charAt(1) === "=") {
			pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
			if (pt || pt === 0) end = pt;
		}
	}
	if (!optional || parsedStart !== end || _forceAllPropTweens) {
		if (!isNaN(parsedStart * end) && end !== "") {
			pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
			funcParam && (pt.fp = funcParam);
			modifier && pt.modifier(modifier, this, target);
			return this._pt = pt;
		}
		!currentValue && !(prop in target) && _missingPlugin(prop, end);
		return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
	}
};
var _processVars = function _processVars(vars, index, target, targets, tween) {
	_isFunction$1(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
	if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) return _isString$1(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
	var copy = {}, p;
	for (p in vars) copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
	return copy;
};
var _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
	var plugin, pt, ptLookup, i;
	if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
		tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
		if (tween !== _quickTween) {
			ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
			i = plugin._props.length;
			while (i--) ptLookup[plugin._props[i]] = pt;
		}
	}
	return plugin;
};
var _overwritingTween;
var _forceAllPropTweens;
var _initTween = function _initTween(tween, time, tTime) {
	var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, reverseEase = vars.easeReverse || yoyoEase, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
	tl && (!keyframes || !ease) && (ease = "none");
	tween._ease = _parseEase(ease, _defaults.ease);
	tween._rEase = reverseEase && (_parseEase(reverseEase) || tween._ease);
	tween._from = !tl && !!vars.runBackwards;
	if (tween._from) tween.ratio = 1;
	if (!tl || keyframes && !vars.stagger) {
		harness = targets[0] ? _getCache(targets[0]).harness : 0;
		harnessVars = harness && vars[harness.prop];
		cleanVars = _copyExcluding(vars, _reservedProps);
		if (prevStartAt) {
			prevStartAt._zTime < 0 && prevStartAt.progress(1);
			time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
			prevStartAt._lazy = 0;
		}
		if (startAt) {
			_removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
				data: "isStart",
				overwrite: false,
				parent,
				immediateRender: true,
				lazy: !prevStartAt && _isNotFalse(lazy),
				startAt: null,
				delay: 0,
				onUpdate: onUpdate && function() {
					return _callback(tween, "onUpdate");
				},
				stagger: 0
			}, startAt)));
			tween._startAt._dp = 0;
			tween._startAt._sat = tween;
			time < 0 && (_reverting$2 || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
			if (immediateRender) {
				if (dur && time <= 0 && tTime <= 0) {
					time && (tween._zTime = time);
					return;
				}
			}
		} else if (runBackwards && dur) {
			if (!prevStartAt) {
				time && (immediateRender = false);
				p = _setDefaults({
					overwrite: false,
					data: "isFromStart",
					lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
					immediateRender,
					stagger: 0,
					parent
				}, cleanVars);
				harnessVars && (p[harness.prop] = harnessVars);
				_removeFromParent(tween._startAt = Tween.set(targets, p));
				tween._startAt._dp = 0;
				tween._startAt._sat = tween;
				time < 0 && (_reverting$2 ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
				tween._zTime = time;
				if (!immediateRender) _initTween(tween._startAt, _tinyNum, _tinyNum);
				else if (!time) return;
			}
		}
		tween._pt = tween._ptCache = 0;
		lazy = dur && _isNotFalse(lazy) || lazy && !dur;
		for (i = 0; i < targets.length; i++) {
			target = targets[i];
			gsData = target._gsap || _harness(targets)[i]._gsap;
			tween._ptLookup[i] = ptLookup = {};
			_lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
			index = fullTargets === targets ? i : fullTargets.indexOf(target);
			if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
				tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
				plugin._props.forEach(function(name) {
					ptLookup[name] = pt;
				});
				plugin.priority && (hasPriority = 1);
			}
			if (!harness || harnessVars) for (p in cleanVars) if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) plugin.priority && (hasPriority = 1);
			else ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
			tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
			if (autoOverwrite && tween._pt) {
				_overwritingTween = tween;
				_globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
				overwritten = !tween.parent;
				_overwritingTween = 0;
			}
			tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
		}
		hasPriority && _sortPropTweensByPriority(tween);
		tween._onInit && tween._onInit(tween);
	}
	tween._onUpdate = onUpdate;
	tween._initted = (!tween._op || tween._pt) && !overwritten;
	keyframes && time <= 0 && tl.render(_bigNum$3, true, true);
};
var _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
	var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i;
	if (!ptCache) {
		ptCache = tween._ptCache[property] = [];
		lookup = tween._ptLookup;
		i = tween._targets.length;
		while (i--) {
			pt = lookup[i][property];
			if (pt && pt.d && pt.d._pt) {
				pt = pt.d._pt;
				while (pt && pt.p !== property && pt.fp !== property) pt = pt._next;
			}
			if (!pt) {
				_forceAllPropTweens = 1;
				tween.vars[property] = "+=0";
				_initTween(tween, time);
				_forceAllPropTweens = 0;
				return skipRecursion ? _warn(property + " not eligible for reset. Try splitting into individual properties") : 1;
			}
			ptCache.push(pt);
		}
	}
	i = ptCache.length;
	while (i--) {
		rootPT = ptCache[i];
		pt = rootPT._pt || rootPT;
		pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
		pt.c = value - pt.s;
		rootPT.e && (rootPT.e = _round$3(value) + getUnit(rootPT.e));
		rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
	}
};
var _addAliasesToVars = function _addAliasesToVars(targets, vars) {
	var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
	if (!propertyAliases) return vars;
	copy = _merge({}, vars);
	for (p in propertyAliases) if (p in copy) {
		aliases = propertyAliases[p].split(",");
		i = aliases.length;
		while (i--) copy[aliases[i]] = copy[p];
	}
	return copy;
};
var _parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
	var ease = obj.ease || easeEach || "power1.inOut", p, a;
	if (_isArray(obj)) {
		a = allProps[prop] || (allProps[prop] = []);
		obj.forEach(function(value, i) {
			return a.push({
				t: i / (obj.length - 1) * 100,
				v: value,
				e: ease
			});
		});
	} else for (p in obj) {
		a = allProps[p] || (allProps[p] = []);
		p === "ease" || a.push({
			t: parseFloat(prop),
			v: obj[p],
			e: ease
		});
	}
};
var _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
	return _isFunction$1(value) ? value.call(tween, i, target, targets) : _isString$1(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
};
var _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert";
var _staggerPropsToSkip = {};
_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
	return _staggerPropsToSkip[name] = 1;
});
var Tween = /*#__PURE__*/ function(_Animation2) {
	_inheritsLoose(Tween, _Animation2);
	function Tween(targets, vars, position, skipInherit) {
		var _this3;
		if (typeof vars === "number") {
			position.duration = vars;
			vars = position;
			position = null;
		}
		_this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
		var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber$1(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
		_this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
		_this3._ptLookup = [];
		_this3._overwrite = overwrite;
		if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
			vars = _this3.vars;
			var easeReverse = vars.easeReverse || vars.yoyoEase;
			tl = _this3.timeline = new Timeline({
				data: "nested",
				defaults: defaults || {},
				targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
			});
			tl.kill();
			tl.parent = tl._dp = _assertThisInitialized(_this3);
			tl._start = 0;
			if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
				l = parsedTargets.length;
				staggerFunc = stagger && distribute(stagger);
				if (_isObject(stagger)) {
					for (p in stagger) if (~_staggerTweenProps.indexOf(p)) {
						staggerVarsToMerge || (staggerVarsToMerge = {});
						staggerVarsToMerge[p] = stagger[p];
					}
				}
				for (i = 0; i < l; i++) {
					copy = _copyExcluding(vars, _staggerPropsToSkip);
					copy.stagger = 0;
					easeReverse && (copy.easeReverse = easeReverse);
					staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
					curTarget = parsedTargets[i];
					copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
					copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
					if (!stagger && l === 1 && copy.delay) {
						_this3._delay = delay = copy.delay;
						_this3._start += delay;
						copy.delay = 0;
					}
					tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
					tl._ease = _easeMap.none;
				}
				tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
			} else if (keyframes) {
				_inheritDefaults(_setDefaults(tl.vars.defaults, { ease: "none" }));
				tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
				var time = 0, a, kf, v;
				if (_isArray(keyframes)) {
					keyframes.forEach(function(frame) {
						return tl.to(parsedTargets, frame, ">");
					});
					tl.duration();
				} else {
					copy = {};
					for (p in keyframes) p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
					for (p in copy) {
						a = copy[p].sort(function(a, b) {
							return a.t - b.t;
						});
						time = 0;
						for (i = 0; i < a.length; i++) {
							kf = a[i];
							v = {
								ease: kf.e,
								duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
							};
							v[p] = kf.v;
							tl.to(parsedTargets, v, time);
							time += v.duration;
						}
					}
					tl.duration() < duration && tl.to({}, { duration: duration - tl.duration() });
				}
			}
			duration || _this3.duration(duration = tl.duration());
		} else _this3.timeline = 0;
		if (overwrite === true && !_suppressOverwrites) {
			_overwritingTween = _assertThisInitialized(_this3);
			_globalTimeline.killTweensOf(parsedTargets);
			_overwritingTween = 0;
		}
		_addToTimeline(parent, _assertThisInitialized(_this3), position);
		vars.reversed && _this3.reverse();
		vars.paused && _this3.paused(true);
		if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
			_this3._tTime = -_tinyNum;
			_this3.render(Math.max(0, -delay) || 0);
		}
		scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
		return _this3;
	}
	var _proto3 = Tween.prototype;
	_proto3.render = function render(totalTime, suppressEvents, force) {
		var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline;
		if (!dur) _renderZeroDurationTween(this, totalTime, suppressEvents, force);
		else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative || this._lazy) {
			time = tTime;
			timeline = this.timeline;
			if (this._repeat) {
				cycleDuration = dur + this._rDelay;
				if (this._repeat < -1 && isNegative) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
				time = _roundPrecise(tTime % cycleDuration);
				if (tTime === tDur) {
					iteration = this._repeat;
					time = dur;
				} else {
					prevIteration = _roundPrecise(tTime / cycleDuration);
					iteration = ~~prevIteration;
					if (iteration && iteration === prevIteration) {
						time = dur;
						iteration--;
					} else if (time > dur) time = dur;
				}
				isYoyo = this._yoyo && iteration & 1;
				if (isYoyo) time = dur - time;
				prevIteration = _animationCycle(this._tTime, cycleDuration);
				if (time === prevTime && !force && this._initted && iteration === prevIteration) {
					this._tTime = tTime;
					return this;
				}
				if (iteration !== prevIteration) {
					if (this.vars.repeatRefresh && !isYoyo && !this._lock && time !== cycleDuration && this._initted) {
						this._lock = force = 1;
						this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
					}
				}
			}
			if (!this._initted) {
				if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
					this._tTime = 0;
					return this;
				}
				if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) return this;
				if (dur !== this._dur) return this.render(totalTime, suppressEvents, force);
			}
			if (this._rEase) {
				var inv = time < prevTime;
				if (inv !== this._inv) {
					var segDur = inv ? prevTime : dur - prevTime;
					this._inv = inv;
					if (this._from) this.ratio = 1 - this.ratio;
					this._invRatio = this.ratio;
					this._invTime = prevTime;
					this._invRecip = segDur ? (inv ? -1 : 1) / segDur : 0;
					this._invScale = inv ? -this.ratio : 1 - this.ratio;
					this._invEase = inv ? this._rEase : this._ease;
				}
				this.ratio = ratio = this._invRatio + this._invScale * this._invEase((time - this._invTime) * this._invRecip);
			} else this.ratio = ratio = this._ease(time / dur);
			if (this._from) this.ratio = ratio = 1 - ratio;
			this._tTime = tTime;
			this._time = time;
			if (!this._act && this._ts) {
				this._act = 1;
				this._lazy = 0;
			}
			if (!prevTime && tTime && !suppressEvents && !prevIteration) {
				_callback(this, "onStart");
				if (this._tTime !== tTime) return this;
			}
			pt = this._pt;
			while (pt) {
				pt.r(ratio, pt.d);
				pt = pt._next;
			}
			timeline && timeline.render(totalTime < 0 ? totalTime : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
			if (this._onUpdate && !suppressEvents) {
				isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
				_callback(this, "onUpdate");
			}
			this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
			if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
				isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
				(totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
				if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
					_callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
					this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
				}
			}
		}
		return this;
	};
	_proto3.targets = function targets() {
		return this._targets;
	};
	_proto3.invalidate = function invalidate(soft) {
		(!soft || !this.vars.runBackwards) && (this._startAt = 0);
		this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
		this._ptLookup = [];
		this.timeline && this.timeline.invalidate(soft);
		return _Animation2.prototype.invalidate.call(this, soft);
	};
	_proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
		_tickerActive || _ticker.wake();
		this._ts || this.play();
		var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
		this._initted || _initTween(this, time);
		ratio = this._ease(time / this._dur);
		if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) return this.resetTo(property, value, start, startIsRelative, 1);
		_alignPlayhead(this, 0);
		this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
		return this.render(0);
	};
	_proto3.kill = function kill(targets, vars) {
		if (vars === void 0) vars = "all";
		if (!targets && (!vars || vars === "all")) {
			this._lazy = this._pt = 0;
			this.parent ? _interrupt(this) : this.scrollTrigger && this.scrollTrigger.kill(!!_reverting$2);
			return this;
		}
		if (this.timeline) {
			var tDur = this.timeline.totalDuration();
			this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
			this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
			return this;
		}
		var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
		if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
			vars === "all" && (this._pt = 0);
			return _interrupt(this);
		}
		overwrittenProps = this._op = this._op || [];
		if (vars !== "all") {
			if (_isString$1(vars)) {
				p = {};
				_forEachName(vars, function(name) {
					return p[name] = 1;
				});
				vars = p;
			}
			vars = _addAliasesToVars(parsedTargets, vars);
		}
		i = parsedTargets.length;
		while (i--) if (~killingTargets.indexOf(parsedTargets[i])) {
			curLookup = propTweenLookup[i];
			if (vars === "all") {
				overwrittenProps[i] = vars;
				props = curLookup;
				curOverwriteProps = {};
			} else {
				curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
				props = vars;
			}
			for (p in props) {
				pt = curLookup && curLookup[p];
				if (pt) {
					if (!("kill" in pt.d) || pt.d.kill(p) === true) _removeLinkedListItem(this, pt, "_pt");
					delete curLookup[p];
				}
				if (curOverwriteProps !== "all") curOverwriteProps[p] = 1;
			}
		}
		this._initted && !this._pt && firstPT && _interrupt(this);
		return this;
	};
	Tween.to = function to(targets, vars) {
		return new Tween(targets, vars, arguments[2]);
	};
	Tween.from = function from(targets, vars) {
		return _createTweenType(1, arguments);
	};
	Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
		return new Tween(callback, 0, {
			immediateRender: false,
			lazy: false,
			overwrite: false,
			delay,
			onComplete: callback,
			onReverseComplete: callback,
			onCompleteParams: params,
			onReverseCompleteParams: params,
			callbackScope: scope
		});
	};
	Tween.fromTo = function fromTo(targets, fromVars, toVars) {
		return _createTweenType(2, arguments);
	};
	Tween.set = function set(targets, vars) {
		vars.duration = 0;
		vars.repeatDelay || (vars.repeat = 0);
		return new Tween(targets, vars);
	};
	Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
		return _globalTimeline.killTweensOf(targets, props, onlyActive);
	};
	return Tween;
}(Animation);
_setDefaults(Tween.prototype, {
	_targets: [],
	_lazy: 0,
	_startAt: 0,
	_op: 0,
	_onInit: 0
});
_forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
	Tween[name] = function() {
		var tl = new Timeline(), params = _slice.call(arguments, 0);
		params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
		return tl[name].apply(tl, params);
	};
});
var _setterPlain = function _setterPlain(target, property, value) {
	return target[property] = value;
};
var _setterFunc = function _setterFunc(target, property, value) {
	return target[property](value);
};
var _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
	return target[property](data.fp, value);
};
var _setterAttribute = function _setterAttribute(target, property, value) {
	return target.setAttribute(property, value);
};
var _getSetter = function _getSetter(target, property) {
	return _isFunction$1(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
};
var _renderPlain = function _renderPlain(ratio, data) {
	return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
};
var _renderBoolean = function _renderBoolean(ratio, data) {
	return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
};
var _renderComplexString = function _renderComplexString(ratio, data) {
	var pt = data._pt, s = "";
	if (!ratio && data.b) s = data.b;
	else if (ratio === 1 && data.e) s = data.e;
	else {
		while (pt) {
			s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s;
			pt = pt._next;
		}
		s += data.c;
	}
	data.set(data.t, data.p, s, data);
};
var _renderPropTweens = function _renderPropTweens(ratio, data) {
	var pt = data._pt;
	while (pt) {
		pt.r(ratio, pt.d);
		pt = pt._next;
	}
};
var _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
	var pt = this._pt, next;
	while (pt) {
		next = pt._next;
		pt.p === property && pt.modifier(modifier, tween, target);
		pt = next;
	}
};
var _killPropTweensOf = function _killPropTweensOf(property) {
	var pt = this._pt, hasNonDependentRemaining, next;
	while (pt) {
		next = pt._next;
		if (pt.p === property && !pt.op || pt.op === property) _removeLinkedListItem(this, pt, "_pt");
		else if (!pt.dep) hasNonDependentRemaining = 1;
		pt = next;
	}
	return !hasNonDependentRemaining;
};
var _setterWithModifier = function _setterWithModifier(target, property, value, data) {
	data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
};
var _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
	var pt = parent._pt, next, pt2, first, last;
	while (pt) {
		next = pt._next;
		pt2 = first;
		while (pt2 && pt2.pr > pt.pr) pt2 = pt2._next;
		if (pt._prev = pt2 ? pt2._prev : last) pt._prev._next = pt;
		else first = pt;
		if (pt._next = pt2) pt2._prev = pt;
		else last = pt;
		pt = next;
	}
	parent._pt = first;
};
var PropTween = /*#__PURE__*/ function() {
	function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
		this.t = target;
		this.s = start;
		this.c = change;
		this.p = prop;
		this.r = renderer || _renderPlain;
		this.d = data || this;
		this.set = setter || _setterPlain;
		this.pr = priority || 0;
		this._next = next;
		if (next) next._prev = this;
	}
	var _proto4 = PropTween.prototype;
	_proto4.modifier = function modifier(func, tween, target) {
		this.mSet = this.mSet || this.set;
		this.set = _setterWithModifier;
		this.m = func;
		this.mt = target;
		this.tween = tween;
	};
	return PropTween;
}();
_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(name) {
	return _reservedProps[name] = 1;
});
_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
	sortChildren: false,
	defaults: _defaults,
	autoRemoveChildren: true,
	id: "root",
	smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;
var _media = [];
var _listeners = {};
var _emptyArray = [];
var _lastMediaTime = 0;
var _contextID = 0;
var _dispatch = function _dispatch(type) {
	return (_listeners[type] || _emptyArray).map(function(f) {
		return f();
	});
};
var _onMediaChange = function _onMediaChange() {
	var time = Date.now(), matches = [];
	if (time - _lastMediaTime > 2) {
		_dispatch("matchMediaInit");
		_media.forEach(function(c) {
			var queries = c.queries, conditions = c.conditions, match, p, anyMatch, toggled;
			for (p in queries) {
				match = _win$1.matchMedia(queries[p]).matches;
				match && (anyMatch = 1);
				if (match !== conditions[p]) {
					conditions[p] = match;
					toggled = 1;
				}
			}
			if (toggled) {
				c.revert();
				anyMatch && matches.push(c);
			}
		});
		_dispatch("matchMediaRevert");
		matches.forEach(function(c) {
			return c.onMatch(c, function(func) {
				return c.add(null, func);
			});
		});
		_lastMediaTime = time;
		_dispatch("matchMedia");
	}
};
var Context = /*#__PURE__*/ function() {
	function Context(func, scope) {
		this.selector = scope && selector(scope);
		this.data = [];
		this._r = [];
		this.isReverted = false;
		this.id = _contextID++;
		func && this.add(func);
	}
	var _proto5 = Context.prototype;
	_proto5.add = function add(name, func, scope) {
		if (_isFunction$1(name)) {
			scope = func;
			func = name;
			name = _isFunction$1;
		}
		var self = this, f = function f() {
			var prev = _context, prevSelector = self.selector, result;
			prev && prev !== self && prev.data.push(self);
			scope && (self.selector = selector(scope));
			_context = self;
			result = func.apply(self, arguments);
			_isFunction$1(result) && self._r.push(result);
			_context = prev;
			self.selector = prevSelector;
			self.isReverted = false;
			return result;
		};
		self.last = f;
		return name === _isFunction$1 ? f(self, function(func) {
			return self.add(null, func);
		}) : name ? self[name] = f : f;
	};
	_proto5.ignore = function ignore(func) {
		var prev = _context;
		_context = null;
		func(this);
		_context = prev;
	};
	_proto5.getTweens = function getTweens() {
		var a = [];
		this.data.forEach(function(e) {
			return e instanceof Context ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
		});
		return a;
	};
	_proto5.clear = function clear() {
		this._r.length = this.data.length = 0;
	};
	_proto5.kill = function kill(revert, matchMedia) {
		var _this4 = this;
		if (revert) (function() {
			var tweens = _this4.getTweens(), i = _this4.data.length, t;
			while (i--) {
				t = _this4.data[i];
				if (t.data === "isFlip") {
					t.revert();
					t.getChildren(true, true, false).forEach(function(tween) {
						return tweens.splice(tweens.indexOf(tween), 1);
					});
				}
			}
			tweens.map(function(t) {
				return {
					g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -Infinity,
					t
				};
			}).sort(function(a, b) {
				return b.g - a.g || -Infinity;
			}).forEach(function(o) {
				return o.t.revert(revert);
			});
			i = _this4.data.length;
			while (i--) {
				t = _this4.data[i];
				if (t instanceof Timeline) {
					if (t.data !== "nested") {
						t.scrollTrigger && t.scrollTrigger.revert();
						t.kill();
					}
				} else !(t instanceof Tween) && t.revert && t.revert(revert);
			}
			_this4._r.forEach(function(f) {
				return f(revert, _this4);
			});
			_this4.isReverted = true;
		})();
		else this.data.forEach(function(e) {
			return e.kill && e.kill();
		});
		this.clear();
		if (matchMedia) {
			var i = _media.length;
			while (i--) _media[i].id === this.id && _media.splice(i, 1);
		}
	};
	_proto5.revert = function revert(config) {
		this.kill(config || {});
	};
	return Context;
}();
var MatchMedia = /*#__PURE__*/ function() {
	function MatchMedia(scope) {
		this.contexts = [];
		this.scope = scope;
		_context && _context.data.push(this);
	}
	var _proto6 = MatchMedia.prototype;
	_proto6.add = function add(conditions, func, scope) {
		_isObject(conditions) || (conditions = { matches: conditions });
		var context = new Context(0, scope || this.scope), cond = context.conditions = {}, mq, p, active;
		_context && !context.selector && (context.selector = _context.selector);
		this.contexts.push(context);
		func = context.add("onMatch", func);
		context.queries = conditions;
		for (p in conditions) if (p === "all") active = 1;
		else {
			mq = _win$1.matchMedia(conditions[p]);
			if (mq) {
				_media.indexOf(context) < 0 && _media.push(context);
				(cond[p] = mq.matches) && (active = 1);
				mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
			}
		}
		active && func(context, function(f) {
			return context.add(null, f);
		});
		return this;
	};
	_proto6.revert = function revert(config) {
		this.kill(config || {});
	};
	_proto6.kill = function kill(revert) {
		this.contexts.forEach(function(c) {
			return c.kill(revert, true);
		});
	};
	return MatchMedia;
}();
var _gsap = {
	registerPlugin: function registerPlugin() {
		for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
		args.forEach(function(config) {
			return _createPlugin(config);
		});
	},
	timeline: function timeline(vars) {
		return new Timeline(vars);
	},
	getTweensOf: function getTweensOf(targets, onlyActive) {
		return _globalTimeline.getTweensOf(targets, onlyActive);
	},
	getProperty: function getProperty(target, property, unit, uncache) {
		_isString$1(target) && (target = toArray(target)[0]);
		var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
		unit === "native" && (unit = "");
		return !target ? target : !property ? function(property, unit, uncache) {
			return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
		} : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
	},
	quickSetter: function quickSetter(target, property, unit) {
		target = toArray(target);
		if (target.length > 1) {
			var setters = target.map(function(t) {
				return gsap$2.quickSetter(t, property, unit);
			}), l = setters.length;
			return function(value) {
				var i = l;
				while (i--) setters[i](value);
			};
		}
		target = target[0] || {};
		var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
			var p = new Plugin();
			_quickTween._pt = 0;
			p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
			p.render(1, p);
			_quickTween._pt && _renderPropTweens(1, _quickTween);
		} : cache.set(target, p);
		return Plugin ? setter : function(value) {
			return setter(target, p, unit ? value + unit : value, cache, 1);
		};
	},
	quickTo: function quickTo(target, property, vars) {
		var _setDefaults2;
		var tween = gsap$2.to(target, _setDefaults((_setDefaults2 = {}, _setDefaults2[property] = "+=0.1", _setDefaults2.paused = true, _setDefaults2.stagger = 0, _setDefaults2), vars || {})), func = function func(value, start, startIsRelative) {
			return tween.resetTo(property, value, start, startIsRelative);
		};
		func.tween = tween;
		return func;
	},
	isTweening: function isTweening(targets) {
		return _globalTimeline.getTweensOf(targets, true).length > 0;
	},
	defaults: function defaults(value) {
		value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
		return _mergeDeep(_defaults, value || {});
	},
	config: function config(value) {
		return _mergeDeep(_config, value || {});
	},
	registerEffect: function registerEffect(_ref3) {
		var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
		(plugins || "").split(",").forEach(function(pluginName) {
			return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
		});
		_effects[name] = function(targets, vars, tl) {
			return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
		};
		if (extendTimeline) Timeline.prototype[name] = function(targets, vars, position) {
			return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
		};
	},
	registerEase: function registerEase(name, ease) {
		_easeMap[name] = _parseEase(ease);
	},
	parseEase: function parseEase(ease, defaultEase) {
		return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
	},
	getById: function getById(id) {
		return _globalTimeline.getById(id);
	},
	exportRoot: function exportRoot(vars, includeDelayedCalls) {
		if (vars === void 0) vars = {};
		var tl = new Timeline(vars), child, next;
		tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
		_globalTimeline.remove(tl);
		tl._dp = 0;
		tl._time = tl._tTime = _globalTimeline._time;
		child = _globalTimeline._first;
		while (child) {
			next = child._next;
			if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) _addToTimeline(tl, child, child._start - child._delay);
			child = next;
		}
		_addToTimeline(_globalTimeline, tl, 0);
		return tl;
	},
	context: function context(func, scope) {
		return func ? new Context(func, scope) : _context;
	},
	matchMedia: function matchMedia(scope) {
		return new MatchMedia(scope);
	},
	matchMediaRefresh: function matchMediaRefresh() {
		return _media.forEach(function(c) {
			var cond = c.conditions, found, p;
			for (p in cond) if (cond[p]) {
				cond[p] = false;
				found = 1;
			}
			found && c.revert();
		}) || _onMediaChange();
	},
	addEventListener: function addEventListener(type, callback) {
		var a = _listeners[type] || (_listeners[type] = []);
		~a.indexOf(callback) || a.push(callback);
	},
	removeEventListener: function removeEventListener(type, callback) {
		var a = _listeners[type], i = a && a.indexOf(callback);
		i >= 0 && a.splice(i, 1);
	},
	utils: {
		wrap,
		wrapYoyo,
		distribute,
		random,
		snap,
		normalize,
		getUnit,
		clamp,
		splitColor,
		toArray,
		selector,
		mapRange,
		pipe,
		unitize,
		interpolate,
		shuffle
	},
	install: _install,
	effects: _effects,
	ticker: _ticker,
	updateRoot: Timeline.updateRoot,
	plugins: _plugins,
	globalTimeline: _globalTimeline,
	core: {
		PropTween,
		globals: _addGlobal,
		Tween,
		Timeline,
		Animation,
		getCache: _getCache,
		_removeLinkedListItem,
		reverting: function reverting() {
			return _reverting$2;
		},
		context: function context(toAdd) {
			if (toAdd && _context) {
				_context.data.push(toAdd);
				toAdd._ctx = _context;
			}
			return _context;
		},
		suppressOverwrites: function suppressOverwrites(value) {
			return _suppressOverwrites = value;
		}
	}
};
_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
	return _gsap[name] = Tween[name];
});
_ticker.add(Timeline.updateRoot);
_quickTween = _gsap.to({}, { duration: 0 });
var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
	var pt = plugin._pt;
	while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) pt = pt._next;
	return pt;
};
var _addModifiers = function _addModifiers(tween, modifiers) {
	var targets = tween._targets, p, i, pt;
	for (p in modifiers) {
		i = targets.length;
		while (i--) {
			pt = tween._ptLookup[i][p];
			if (pt && (pt = pt.d)) {
				if (pt._pt) pt = _getPluginPropTween(pt, p);
				pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
			}
		}
	}
};
var _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
	return {
		name,
		headless: 1,
		rawVars: 1,
		init: function init(target, vars, tween) {
			tween._onInit = function(tween) {
				var temp, p;
				if (_isString$1(vars)) {
					temp = {};
					_forEachName(vars, function(name) {
						return temp[name] = 1;
					});
					vars = temp;
				}
				if (modifier) {
					temp = {};
					for (p in vars) temp[p] = modifier(vars[p]);
					vars = temp;
				}
				_addModifiers(tween, vars);
			};
		}
	};
};
var gsap$2 = _gsap.registerPlugin({
	name: "attr",
	init: function init(target, vars, tween, index, targets) {
		var p, pt, v;
		this.tween = tween;
		for (p in vars) {
			v = target.getAttribute(p) || "";
			pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
			pt.op = p;
			pt.b = v;
			this._props.push(p);
		}
	},
	render: function render(ratio, data) {
		var pt = data._pt;
		while (pt) {
			_reverting$2 ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
			pt = pt._next;
		}
	}
}, {
	name: "endArray",
	headless: 1,
	init: function init(target, value) {
		var i = value.length;
		while (i--) this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
	}
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
Tween.version = Timeline.version = gsap$2.version = "3.15.0";
_coreReady = 1;
_windowExists$1() && _wake();
_easeMap.Power0;
_easeMap.Power1;
_easeMap.Power2;
_easeMap.Power3;
_easeMap.Power4;
_easeMap.Linear;
_easeMap.Quad;
_easeMap.Cubic;
_easeMap.Quart;
_easeMap.Quint;
_easeMap.Strong;
_easeMap.Elastic;
_easeMap.Back;
_easeMap.SteppedEase;
_easeMap.Bounce;
_easeMap.Sine;
_easeMap.Expo;
_easeMap.Circ;
//#endregion
//#region node_modules/gsap/CSSPlugin.js
/*!
* CSSPlugin 3.15.0
* https://gsap.com
*
* Copyright 2008-2026, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license
* @author: Jack Doyle, jack@greensock.com
*/
var _win;
var _doc;
var _docElement;
var _pluginInitted;
var _tempDiv;
var _recentSetterPlugin;
var _reverting$1;
var _windowExists = function _windowExists() {
	return typeof window !== "undefined";
};
var _transformProps = {};
var _RAD2DEG$1 = 180 / Math.PI;
var _DEG2RAD$1 = Math.PI / 180;
var _atan2$2 = Math.atan2;
var _bigNum$2 = 1e8;
var _capsExp = /([A-Z])/g;
var _horizontalExp = /(left|right|width|margin|padding|x)/i;
var _complexExp = /[\s,\(]\S/;
var _propertyAliases = {
	autoAlpha: "opacity,visibility",
	scale: "scaleX,scaleY",
	alpha: "opacity"
};
var _renderCSSProp = function _renderCSSProp(ratio, data) {
	return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
};
var _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
	return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
};
var _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
	return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
};
var _renderCSSPropWithBeginningAndEnd = function _renderCSSPropWithBeginningAndEnd(ratio, data) {
	return data.set(data.t, data.p, ratio === 1 ? data.e : ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
};
var _renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
	var value = data.s + data.c * ratio;
	data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
};
var _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
	return data.set(data.t, data.p, ratio ? data.e : data.b, data);
};
var _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
	return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
};
var _setterCSSStyle = function _setterCSSStyle(target, property, value) {
	return target.style[property] = value;
};
var _setterCSSProp = function _setterCSSProp(target, property, value) {
	return target.style.setProperty(property, value);
};
var _setterTransform = function _setterTransform(target, property, value) {
	return target._gsap[property] = value;
};
var _setterScale = function _setterScale(target, property, value) {
	return target._gsap.scaleX = target._gsap.scaleY = value;
};
var _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
	var cache = target._gsap;
	cache.scaleX = cache.scaleY = value;
	cache.renderTransform(ratio, cache);
};
var _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
	var cache = target._gsap;
	cache[property] = value;
	cache.renderTransform(ratio, cache);
};
var _transformProp = "transform";
var _transformOriginProp = _transformProp + "Origin";
var _saveStyle = function _saveStyle(property, isNotCSS) {
	var _this = this;
	var target = this.target, style = target.style, cache = target._gsap;
	if (property in _transformProps && style) {
		this.tfm = this.tfm || {};
		if (property !== "transform") {
			property = _propertyAliases[property] || property;
			~property.indexOf(",") ? property.split(",").forEach(function(a) {
				return _this.tfm[a] = _get(target, a);
			}) : this.tfm[property] = cache.x ? cache[property] : _get(target, property);
			property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
		} else return _propertyAliases.transform.split(",").forEach(function(p) {
			return _saveStyle.call(_this, p, isNotCSS);
		});
		if (this.props.indexOf(_transformProp) >= 0) return;
		if (cache.svg) {
			this.svgo = target.getAttribute("data-svg-origin");
			this.props.push(_transformOriginProp, isNotCSS, "");
		}
		property = _transformProp;
	}
	(style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
};
var _removeIndependentTransforms = function _removeIndependentTransforms(style) {
	if (style.translate) {
		style.removeProperty("translate");
		style.removeProperty("scale");
		style.removeProperty("rotate");
	}
};
var _revertStyle = function _revertStyle() {
	var props = this.props, target = this.target, style = target.style, cache = target._gsap, i, p;
	for (i = 0; i < props.length; i += 3) if (!props[i + 1]) props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
	else if (props[i + 1] === 2) target[props[i]](props[i + 2]);
	else target[props[i]] = props[i + 2];
	if (this.tfm) {
		for (p in this.tfm) cache[p] = this.tfm[p];
		if (cache.svg) {
			cache.renderTransform();
			target.setAttribute("data-svg-origin", this.svgo || "");
		}
		i = _reverting$1();
		if ((!i || !i.isStart) && !style[_transformProp]) {
			_removeIndependentTransforms(style);
			if (cache.zOrigin && style[_transformOriginProp]) {
				style[_transformOriginProp] += " " + cache.zOrigin + "px";
				cache.zOrigin = 0;
				cache.renderTransform();
			}
			cache.uncache = 1;
		}
	}
};
var _getStyleSaver = function _getStyleSaver(target, properties) {
	var saver = {
		target,
		props: [],
		revert: _revertStyle,
		save: _saveStyle
	};
	target._gsap || gsap$2.core.getCache(target);
	properties && target.style && target.nodeType && properties.split(",").forEach(function(p) {
		return saver.save(p);
	});
	return saver;
};
var _supports3D;
var _createElement = function _createElement(type, ns) {
	var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type);
	return e && e.style ? e : _doc.createElement(type);
};
var _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
	var cs = getComputedStyle(target);
	return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || "";
};
var _prefixes = "O,Moz,ms,Ms,Webkit".split(",");
var _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
	var s = (element || _tempDiv).style, i = 5;
	if (property in s && !preferPrefix) return property;
	property = property.charAt(0).toUpperCase() + property.substr(1);
	while (i-- && !(_prefixes[i] + property in s));
	return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
};
var _initCore$2 = function _initCore() {
	if (_windowExists() && window.document) {
		_win = window;
		_doc = _win.document;
		_docElement = _doc.documentElement;
		_tempDiv = _createElement("div") || { style: {} };
		_createElement("div");
		_transformProp = _checkPropPrefix(_transformProp);
		_transformOriginProp = _transformProp + "Origin";
		_tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
		_supports3D = !!_checkPropPrefix("perspective");
		_reverting$1 = gsap$2.core.reverting;
		_pluginInitted = 1;
	}
};
var _getReparentedCloneBBox = function _getReparentedCloneBBox(target) {
	var owner = target.ownerSVGElement, svg = _createElement("svg", owner && owner.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), clone = target.cloneNode(true), bbox;
	clone.style.display = "block";
	svg.appendChild(clone);
	_docElement.appendChild(svg);
	try {
		bbox = clone.getBBox();
	} catch (e) {}
	svg.removeChild(clone);
	_docElement.removeChild(svg);
	return bbox;
};
var _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
	var i = attributesArray.length;
	while (i--) if (target.hasAttribute(attributesArray[i])) return target.getAttribute(attributesArray[i]);
};
var _getBBox = function _getBBox(target) {
	var bounds, cloned;
	try {
		bounds = target.getBBox();
	} catch (error) {
		bounds = _getReparentedCloneBBox(target);
		cloned = 1;
	}
	bounds && (bounds.width || bounds.height) || cloned || (bounds = _getReparentedCloneBBox(target));
	return bounds && !bounds.width && !bounds.x && !bounds.y ? {
		x: +_getAttributeFallbacks(target, [
			"x",
			"cx",
			"x1"
		]) || 0,
		y: +_getAttributeFallbacks(target, [
			"y",
			"cy",
			"y1"
		]) || 0,
		width: 0,
		height: 0
	} : bounds;
};
var _isSVG = function _isSVG(e) {
	return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
};
var _removeProperty = function _removeProperty(target, property) {
	if (property) {
		var style = target.style, first2Chars;
		if (property in _transformProps && property !== _transformOriginProp) property = _transformProp;
		if (style.removeProperty) {
			first2Chars = property.substr(0, 2);
			if (first2Chars === "ms" || property.substr(0, 6) === "webkit") property = "-" + property;
			style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp, "-$1").toLowerCase());
		} else style.removeAttribute(property);
	}
};
var _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
	var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
	plugin._pt = pt;
	pt.b = beginning;
	pt.e = end;
	plugin._props.push(property);
	return pt;
};
var _nonConvertibleUnits = {
	deg: 1,
	rad: 1,
	turn: 1
};
var _nonStandardLayouts = {
	grid: 1,
	flex: 1
};
var _convertToUnit = function _convertToUnit(target, property, value, unit) {
	var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
	if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) return curValue;
	curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
	isSVG = target.getCTM && _isSVG(target);
	if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
		px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
		return _round$3(toPercent ? curValue / px * amount : curValue / 100 * px);
	}
	style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
	parent = unit !== "rem" && ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
	if (isSVG) parent = (target.ownerSVGElement || {}).parentNode;
	if (!parent || parent === _doc || !parent.appendChild) parent = _doc.body;
	cache = parent._gsap;
	if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) return _round$3(curValue / cache.width * amount);
	else {
		if (toPercent && (property === "height" || property === "width")) {
			var v = target.style[property];
			target.style[property] = amount + unit;
			px = target[measureProperty];
			v ? target.style[property] = v : _removeProperty(target, property);
		} else {
			(toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
			parent === target && (style.position = "static");
			parent.appendChild(_tempDiv);
			px = _tempDiv[measureProperty];
			parent.removeChild(_tempDiv);
			style.position = "absolute";
		}
		if (horizontal && toPercent) {
			cache = _getCache(parent);
			cache.time = _ticker.time;
			cache.width = parent[measureProperty];
		}
	}
	return _round$3(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
};
var _get = function _get(target, property, unit, uncache) {
	var value;
	_pluginInitted || _initCore$2();
	if (property in _propertyAliases && property !== "transform") {
		property = _propertyAliases[property];
		if (~property.indexOf(",")) property = property.split(",")[0];
	}
	if (_transformProps[property] && property !== "transform") {
		value = _parseTransform(target, uncache);
		value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
	} else {
		value = target.style[property];
		if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
	}
	return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
};
var _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
	if (!start || start === "none") {
		var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
		if (s && s !== start) {
			prop = p;
			start = s;
		} else if (prop === "borderColor") start = _getComputedProperty(target, "borderTopColor");
	}
	var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
	pt.b = start;
	pt.e = end;
	start += "";
	end += "";
	if (end.substring(0, 6) === "var(--") end = _getComputedProperty(target, end.substring(4, end.indexOf(")")));
	if (end === "auto") {
		startValue = target.style[prop];
		target.style[prop] = end;
		end = _getComputedProperty(target, prop) || end;
		startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
	}
	a = [start, end];
	_colorStringFilter(a);
	start = a[0];
	end = a[1];
	startValues = start.match(_numWithUnitExp) || [];
	endValues = end.match(_numWithUnitExp) || [];
	if (endValues.length) {
		while (result = _numWithUnitExp.exec(end)) {
			endValue = result[0];
			chunk = end.substring(index, result.index);
			if (color) color = (color + 1) % 5;
			else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") color = 1;
			if (endValue !== (startValue = startValues[matchIndex++] || "")) {
				startNum = parseFloat(startValue) || 0;
				startUnit = startValue.substr((startNum + "").length);
				endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
				endNum = parseFloat(endValue);
				endUnit = endValue.substr((endNum + "").length);
				index = _numWithUnitExp.lastIndex - endUnit.length;
				if (!endUnit) {
					endUnit = endUnit || _config.units[prop] || startUnit;
					if (index === end.length) {
						end += endUnit;
						pt.e += endUnit;
					}
				}
				if (startUnit !== endUnit) startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
				pt._pt = {
					_next: pt._pt,
					p: chunk || matchIndex === 1 ? chunk : ",",
					s: startNum,
					c: endNum - startNum,
					m: color && color < 4 || prop === "zIndex" ? Math.round : 0
				};
			}
		}
		pt.c = index < end.length ? end.substring(index, end.length) : "";
	} else pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
	_relExp.test(end) && (pt.e = 0);
	this._pt = pt;
	return pt;
};
var _keywordToPercent = {
	top: "0%",
	bottom: "100%",
	left: "0%",
	right: "100%",
	center: "50%"
};
var _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
	var split = value.split(" "), x = split[0], y = split[1] || "50%";
	if (x === "top" || x === "bottom" || y === "left" || y === "right") {
		value = x;
		x = y;
		y = value;
	}
	split[0] = _keywordToPercent[x] || x;
	split[1] = _keywordToPercent[y] || y;
	return split.join(" ");
};
var _renderClearProps = function _renderClearProps(ratio, data) {
	if (data.tween && data.tween._time === data.tween._dur) {
		var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
		if (props === "all" || props === true) {
			style.cssText = "";
			clearTransforms = 1;
		} else {
			props = props.split(",");
			i = props.length;
			while (--i > -1) {
				prop = props[i];
				if (_transformProps[prop]) {
					clearTransforms = 1;
					prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
				}
				_removeProperty(target, prop);
			}
		}
		if (clearTransforms) {
			_removeProperty(target, _transformProp);
			if (cache) {
				cache.svg && target.removeAttribute("transform");
				style.scale = style.rotate = style.translate = "none";
				_parseTransform(target, 1);
				cache.uncache = 1;
				_removeIndependentTransforms(style);
			}
		}
	}
};
var _specialProps = { clearProps: function clearProps(plugin, target, property, endValue, tween) {
	if (tween.data !== "isFromStart") {
		var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
		pt.u = endValue;
		pt.pr = -10;
		pt.tween = tween;
		plugin._props.push(property);
		return 1;
	}
} };
var _identity2DMatrix = [
	1,
	0,
	0,
	1,
	0,
	0
];
var _rotationalProperties = {};
var _isNullTransform = function _isNullTransform(value) {
	return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
};
var _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
	var matrixString = _getComputedProperty(target, _transformProp);
	return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp$2).map(_round$3);
};
var _getMatrix = function _getMatrix(target, force2D) {
	var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
	if (cache.svg && target.getAttribute("transform")) {
		temp = target.transform.baseVal.consolidate().matrix;
		matrix = [
			temp.a,
			temp.b,
			temp.c,
			temp.d,
			temp.e,
			temp.f
		];
		return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
	} else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
		temp = style.display;
		style.display = "block";
		parent = target.parentNode;
		if (!parent || !target.offsetParent && !target.getBoundingClientRect().width) {
			addedToDOM = 1;
			nextSibling = target.nextElementSibling;
			_docElement.appendChild(target);
		}
		matrix = _getComputedTransformMatrixAsArray(target);
		temp ? style.display = temp : _removeProperty(target, "display");
		if (addedToDOM) nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
	}
	return force2D && matrix.length > 6 ? [
		matrix[0],
		matrix[1],
		matrix[4],
		matrix[5],
		matrix[12],
		matrix[13]
	] : matrix;
};
var _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
	var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
	if (!originIsAbsolute) {
		bounds = _getBBox(target);
		xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
		yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
	} else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
		x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
		y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
		xOrigin = x;
		yOrigin = y;
	}
	if (smooth || smooth !== false && cache.smooth) {
		tx = xOrigin - xOriginOld;
		ty = yOrigin - yOriginOld;
		cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
		cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
	} else cache.xOffset = cache.yOffset = 0;
	cache.xOrigin = xOrigin;
	cache.yOrigin = yOrigin;
	cache.smooth = !!smooth;
	cache.origin = origin;
	cache.originIsAbsolute = !!originIsAbsolute;
	target.style[_transformOriginProp] = "0px 0px";
	if (pluginToAddPropTweensTo) {
		_addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
		_addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
		_addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
		_addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
	}
	target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
};
var _parseTransform = function _parseTransform(target, uncache) {
	var cache = target._gsap || new GSCache(target);
	if ("x" in cache && !uncache && !cache.uncache) return cache;
	var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0, y, z, scaleX = scaleY = 1, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
	cache.svg = !!(target.getCTM && _isSVG(target));
	if (cs.translate) {
		if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
		style.scale = style.rotate = style.translate = "none";
	}
	matrix = _getMatrix(target, cache.svg);
	if (cache.svg) {
		if (cache.uncache) {
			t2 = target.getBBox();
			origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
			t1 = "";
		} else t1 = !uncache && target.getAttribute("data-svg-origin");
		_applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
	}
	xOrigin = cache.xOrigin || 0;
	yOrigin = cache.yOrigin || 0;
	if (matrix !== _identity2DMatrix) {
		a = matrix[0];
		b = matrix[1];
		c = matrix[2];
		d = matrix[3];
		x = a12 = matrix[4];
		y = a22 = matrix[5];
		if (matrix.length === 6) {
			scaleX = Math.sqrt(a * a + b * b);
			scaleY = Math.sqrt(d * d + c * c);
			rotation = a || b ? _atan2$2(b, a) * _RAD2DEG$1 : 0;
			skewX = c || d ? _atan2$2(c, d) * _RAD2DEG$1 + rotation : 0;
			skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD$1)));
			if (cache.svg) {
				x -= xOrigin - (xOrigin * a + yOrigin * c);
				y -= yOrigin - (xOrigin * b + yOrigin * d);
			}
		} else {
			a32 = matrix[6];
			a42 = matrix[7];
			a13 = matrix[8];
			a23 = matrix[9];
			a33 = matrix[10];
			a43 = matrix[11];
			x = matrix[12];
			y = matrix[13];
			z = matrix[14];
			angle = _atan2$2(a32, a33);
			rotationX = angle * _RAD2DEG$1;
			if (angle) {
				cos = Math.cos(-angle);
				sin = Math.sin(-angle);
				t1 = a12 * cos + a13 * sin;
				t2 = a22 * cos + a23 * sin;
				t3 = a32 * cos + a33 * sin;
				a13 = a12 * -sin + a13 * cos;
				a23 = a22 * -sin + a23 * cos;
				a33 = a32 * -sin + a33 * cos;
				a43 = a42 * -sin + a43 * cos;
				a12 = t1;
				a22 = t2;
				a32 = t3;
			}
			angle = _atan2$2(-c, a33);
			rotationY = angle * _RAD2DEG$1;
			if (angle) {
				cos = Math.cos(-angle);
				sin = Math.sin(-angle);
				t1 = a * cos - a13 * sin;
				t2 = b * cos - a23 * sin;
				t3 = c * cos - a33 * sin;
				a43 = d * sin + a43 * cos;
				a = t1;
				b = t2;
				c = t3;
			}
			angle = _atan2$2(b, a);
			rotation = angle * _RAD2DEG$1;
			if (angle) {
				cos = Math.cos(angle);
				sin = Math.sin(angle);
				t1 = a * cos + b * sin;
				t2 = a12 * cos + a22 * sin;
				b = b * cos - a * sin;
				a22 = a22 * cos - a12 * sin;
				a = t1;
				a12 = t2;
			}
			if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
				rotationX = rotation = 0;
				rotationY = 180 - rotationY;
			}
			scaleX = _round$3(Math.sqrt(a * a + b * b + c * c));
			scaleY = _round$3(Math.sqrt(a22 * a22 + a32 * a32));
			angle = _atan2$2(a12, a22);
			skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG$1 : 0;
			perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
		}
		if (cache.svg) {
			t1 = target.getAttribute("transform");
			cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
			t1 && target.setAttribute("transform", t1);
		}
	}
	if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) if (invertedScaleX) {
		scaleX *= -1;
		skewX += rotation <= 0 ? 180 : -180;
		rotation += rotation <= 0 ? 180 : -180;
	} else {
		scaleY *= -1;
		skewX += skewX <= 0 ? 180 : -180;
	}
	uncache = uncache || cache.uncache;
	cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
	cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
	cache.z = z + px;
	cache.scaleX = _round$3(scaleX);
	cache.scaleY = _round$3(scaleY);
	cache.rotation = _round$3(rotation) + deg;
	cache.rotationX = _round$3(rotationX) + deg;
	cache.rotationY = _round$3(rotationY) + deg;
	cache.skewX = skewX + deg;
	cache.skewY = skewY + deg;
	cache.transformPerspective = perspective + px;
	if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) style[_transformOriginProp] = _firstTwoOnly(origin);
	cache.xOffset = cache.yOffset = 0;
	cache.force3D = _config.force3D;
	cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
	cache.uncache = 0;
	return cache;
};
var _firstTwoOnly = function _firstTwoOnly(value) {
	return (value = value.split(" "))[0] + " " + value[1];
};
var _addPxTranslate = function _addPxTranslate(target, start, value) {
	var unit = getUnit(start);
	return _round$3(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
};
var _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
	cache.z = "0px";
	cache.rotationY = cache.rotationX = "0deg";
	cache.force3D = 0;
	_renderCSSTransforms(ratio, cache);
};
var _zeroDeg = "0deg";
var _zeroPx = "0px";
var _endParenthesis = ") ";
var _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
	var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
	if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
		var angle = parseFloat(rotationY) * _DEG2RAD$1, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
		angle = parseFloat(rotationX) * _DEG2RAD$1;
		cos = Math.cos(angle);
		x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
		y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
		z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
	}
	if (transformPerspective !== _zeroPx) transforms += "perspective(" + transformPerspective + _endParenthesis;
	if (xPercent || yPercent) transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
	if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
	if (rotation !== _zeroDeg) transforms += "rotate(" + rotation + _endParenthesis;
	if (rotationY !== _zeroDeg) transforms += "rotateY(" + rotationY + _endParenthesis;
	if (rotationX !== _zeroDeg) transforms += "rotateX(" + rotationX + _endParenthesis;
	if (skewX !== _zeroDeg || skewY !== _zeroDeg) transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
	if (scaleX !== 1 || scaleY !== 1) transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
	target.style[_transformProp] = transforms || "translate(0, 0)";
};
var _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
	var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
	rotation = parseFloat(rotation);
	skewX = parseFloat(skewX);
	skewY = parseFloat(skewY);
	if (skewY) {
		skewY = parseFloat(skewY);
		skewX += skewY;
		rotation += skewY;
	}
	if (rotation || skewX) {
		rotation *= _DEG2RAD$1;
		skewX *= _DEG2RAD$1;
		a11 = Math.cos(rotation) * scaleX;
		a21 = Math.sin(rotation) * scaleX;
		a12 = Math.sin(rotation - skewX) * -scaleY;
		a22 = Math.cos(rotation - skewX) * scaleY;
		if (skewX) {
			skewY *= _DEG2RAD$1;
			temp = Math.tan(skewX - skewY);
			temp = Math.sqrt(1 + temp * temp);
			a12 *= temp;
			a22 *= temp;
			if (skewY) {
				temp = Math.tan(skewY);
				temp = Math.sqrt(1 + temp * temp);
				a11 *= temp;
				a21 *= temp;
			}
		}
		a11 = _round$3(a11);
		a21 = _round$3(a21);
		a12 = _round$3(a12);
		a22 = _round$3(a22);
	} else {
		a11 = scaleX;
		a22 = scaleY;
		a21 = a12 = 0;
	}
	if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
		tx = _convertToUnit(target, "x", x, "px");
		ty = _convertToUnit(target, "y", y, "px");
	}
	if (xOrigin || yOrigin || xOffset || yOffset) {
		tx = _round$3(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
		ty = _round$3(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
	}
	if (xPercent || yPercent) {
		temp = target.getBBox();
		tx = _round$3(tx + xPercent / 100 * temp.width);
		ty = _round$3(ty + yPercent / 100 * temp.height);
	}
	temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
	target.setAttribute("transform", temp);
	forceCSS && (target.style[_transformProp] = temp);
};
var _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
	var cap = 360, isString = _isString$1(endValue), change = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG$1 : 1) - startNum, finalValue = startNum + change + "deg", direction, pt;
	if (isString) {
		direction = endValue.split("_")[1];
		if (direction === "short") {
			change %= cap;
			if (change !== change % (cap / 2)) change += change < 0 ? cap : -cap;
		}
		if (direction === "cw" && change < 0) change = (change + cap * _bigNum$2) % cap - ~~(change / cap) * cap;
		else if (direction === "ccw" && change > 0) change = (change - cap * _bigNum$2) % cap - ~~(change / cap) * cap;
	}
	plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
	pt.e = finalValue;
	pt.u = "deg";
	plugin._props.push(property);
	return pt;
};
var _assign = function _assign(target, source) {
	for (var p in source) target[p] = source[p];
	return target;
};
var _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
	var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
	if (startCache.svg) {
		startValue = target.getAttribute("transform");
		target.setAttribute("transform", "");
		style[_transformProp] = transforms;
		endCache = _parseTransform(target, 1);
		_removeProperty(target, _transformProp);
		target.setAttribute("transform", startValue);
	} else {
		startValue = getComputedStyle(target)[_transformProp];
		style[_transformProp] = transforms;
		endCache = _parseTransform(target, 1);
		style[_transformProp] = startValue;
	}
	for (p in _transformProps) {
		startValue = startCache[p];
		endValue = endCache[p];
		if (startValue !== endValue && exclude.indexOf(p) < 0) {
			startUnit = getUnit(startValue);
			endUnit = getUnit(endValue);
			startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
			endNum = parseFloat(endValue);
			plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
			plugin._pt.u = endUnit || 0;
			plugin._props.push(p);
		}
	}
	_assign(endCache, startCache);
};
_forEachName("padding,margin,Width,Radius", function(name, index) {
	var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [
		t,
		r,
		b,
		l
	] : [
		t + l,
		t + r,
		b + r,
		b + l
	]).map(function(side) {
		return index < 2 ? name + side : "border" + side + name;
	});
	_specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
		var a, vars;
		if (arguments.length < 4) {
			a = props.map(function(prop) {
				return _get(plugin, prop, property);
			});
			vars = a.join(" ");
			return vars.split(a[0]).length === 5 ? a[0] : vars;
		}
		a = (endValue + "").split(" ");
		vars = {};
		props.forEach(function(prop, i) {
			return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
		});
		plugin.init(target, vars, tween);
	};
});
var CSSPlugin = {
	name: "css",
	register: _initCore$2,
	targetTest: function targetTest(target) {
		return target.style && target.nodeType;
	},
	init: function init(target, vars, tween, index, targets) {
		var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps, finalTransformValue;
		_pluginInitted || _initCore$2();
		this.styles = this.styles || _getStyleSaver(target);
		inlineProps = this.styles.props;
		this.tween = tween;
		for (p in vars) {
			if (p === "autoRound") continue;
			endValue = vars[p];
			if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) continue;
			type = typeof endValue;
			specialProp = _specialProps[p];
			if (type === "function") {
				endValue = endValue.call(tween, index, target, targets);
				type = typeof endValue;
			}
			if (type === "string" && ~endValue.indexOf("random(")) endValue = _replaceRandom(endValue);
			if (specialProp) specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
			else if (p.substr(0, 2) === "--") {
				startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
				endValue += "";
				_colorExp.lastIndex = 0;
				if (!_colorExp.test(startValue)) {
					startUnit = getUnit(startValue);
					endUnit = getUnit(endValue);
					endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
				}
				this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
				props.push(p);
				inlineProps.push(p, 0, style[p]);
			} else if (type !== "undefined") {
				if (startAt && p in startAt) {
					startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
					_isString$1(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
					getUnit(startValue + "") || startValue === "auto" || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
					(startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
				} else startValue = _get(target, p);
				startNum = parseFloat(startValue);
				relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
				relative && (endValue = endValue.substr(2));
				endNum = parseFloat(endValue);
				if (p in _propertyAliases) {
					if (p === "autoAlpha") {
						if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) startNum = 0;
						inlineProps.push("visibility", 0, style.visibility);
						_addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
					}
					if (p !== "scale" && p !== "transform") {
						p = _propertyAliases[p];
						~p.indexOf(",") && (p = p.split(",")[0]);
					}
				}
				isTransformRelated = p in _transformProps;
				if (isTransformRelated) {
					this.styles.save(p);
					finalTransformValue = endValue;
					if (type === "string" && endValue.substring(0, 6) === "var(--") {
						endValue = _getComputedProperty(target, endValue.substring(4, endValue.indexOf(")")));
						if (endValue.substring(0, 5) === "calc(") {
							var origPerspective = target.style.perspective;
							target.style.perspective = endValue;
							endValue = _getComputedProperty(target, "perspective");
							origPerspective ? target.style.perspective = origPerspective : _removeProperty(target, "perspective");
						}
						endNum = parseFloat(endValue);
					}
					if (!transformPropTween) {
						cache = target._gsap;
						cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
						smooth = vars.smoothOrigin !== false && cache.smooth;
						transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
						transformPropTween.dep = 1;
					}
					if (p === "scale") {
						this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
						this._pt.u = 0;
						props.push("scaleY", p);
						p += "X";
					} else if (p === "transformOrigin") {
						inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
						endValue = _convertKeywordsToPercentages(endValue);
						if (cache.svg) _applySVGOrigin(target, endValue, 0, smooth, 0, this);
						else {
							endUnit = parseFloat(endValue.split(" ")[2]) || 0;
							endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
							_addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
						}
						continue;
					} else if (p === "svgOrigin") {
						_applySVGOrigin(target, endValue, 1, smooth, 0, this);
						continue;
					} else if (p in _rotationalProperties) {
						_addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
						continue;
					} else if (p === "smoothOrigin") {
						_addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
						continue;
					} else if (p === "force3D") {
						cache[p] = endValue;
						continue;
					} else if (p === "transform") {
						_addRawTransformPTs(this, endValue, target);
						continue;
					}
				} else if (!(p in style)) p = _checkPropPrefix(p) || p;
				if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
					startUnit = (startValue + "").substr((startNum + "").length);
					endNum || (endNum = 0);
					endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
					startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
					this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
					this._pt.u = endUnit || 0;
					if (isTransformRelated && finalTransformValue !== endValue) {
						this._pt.b = startValue;
						this._pt.e = finalTransformValue;
						this._pt.r = _renderCSSPropWithBeginningAndEnd;
					} else if (startUnit !== endUnit && endUnit !== "%") {
						this._pt.b = startValue;
						this._pt.r = _renderCSSPropWithBeginning;
					}
				} else if (!(p in style)) {
					if (p in target) this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
					else if (p !== "parseTransform") {
						_missingPlugin(p, endValue);
						continue;
					}
				} else _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
				isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : typeof target[p] === "function" ? inlineProps.push(p, 2, target[p]()) : inlineProps.push(p, 1, startValue || target[p]));
				props.push(p);
			}
		}
		hasPriority && _sortPropTweensByPriority(this);
	},
	render: function render(ratio, data) {
		if (data.tween._time || !_reverting$1()) {
			var pt = data._pt;
			while (pt) {
				pt.r(ratio, pt.d);
				pt = pt._next;
			}
		} else data.styles.revert();
	},
	get: _get,
	aliases: _propertyAliases,
	getSetter: function getSetter(target, property, plugin) {
		var p = _propertyAliases[property];
		p && p.indexOf(",") < 0 && (property = p);
		return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
	},
	core: {
		_removeProperty,
		_getMatrix
	}
};
gsap$2.utils.checkPrefix = _checkPropPrefix;
gsap$2.core.getStyleSaver = _getStyleSaver;
(function(positionAndScale, rotation, others, aliases) {
	var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
		_transformProps[name] = 1;
	});
	_forEachName(rotation, function(name) {
		_config.units[name] = "deg";
		_rotationalProperties[name] = 1;
	});
	_propertyAliases[all[13]] = positionAndScale + "," + rotation;
	_forEachName(aliases, function(name) {
		var split = name.split(":");
		_propertyAliases[split[1]] = all[split[0]];
	});
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
_forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
	_config.units[name] = "px";
});
gsap$2.registerPlugin(CSSPlugin);
//#endregion
//#region node_modules/gsap/index.js
var gsapWithCSS = gsap$2.registerPlugin(CSSPlugin) || gsap$2;
gsapWithCSS.core.Tween;
//#endregion
//#region node_modules/gsap/utils/paths.js
/*!
* paths 3.15.0
* https://gsap.com
*
* Copyright 2008-2026, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license
* @author: Jack Doyle, jack@greensock.com
*/
var _svgPathExp = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi;
var _numbersExp = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi;
var _scientific = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi;
var _selectorExp$1 = /(^[#\.][a-z]|[a-y][a-z])/i;
var _DEG2RAD = Math.PI / 180;
180 / Math.PI;
var _sin$1 = Math.sin;
var _cos$1 = Math.cos;
var _abs = Math.abs;
var _sqrt$1 = Math.sqrt;
var _atan2$1 = Math.atan2;
var _largeNum = 1e8;
var _isString = function _isString(value) {
	return typeof value === "string";
};
var _isNumber = function _isNumber(value) {
	return typeof value === "number";
};
var _roundingNum = 1e5;
var _round$2 = function _round(value) {
	return Math.round(value * _roundingNum) / _roundingNum || 0;
};
var _segmentIsClosed = function _segmentIsClosed(segment) {
	return segment.closed = Math.abs(segment[0] - segment[segment.length - 2]) < .001 && Math.abs(segment[1] - segment[segment.length - 1]) < .001;
};
var _getSampleIndex = function _getSampleIndex(samples, length, progress) {
	var l = samples.length, i = ~~(progress * l);
	if (samples[i] > length) {
		while (--i && samples[i] > length);
		i < 0 && (i = 0);
	} else while (samples[++i] < length && i < l);
	return i < l ? i : l - 1;
};
function getRawPath(value) {
	value = _isString(value) && _selectorExp$1.test(value) ? document.querySelector(value) || value : value;
	var e = value.getAttribute ? value : 0, rawPath;
	if (e && (value = value.getAttribute("d"))) {
		if (!e._gsPath) e._gsPath = {};
		rawPath = e._gsPath[value];
		return rawPath && !rawPath._dirty ? rawPath : e._gsPath[value] = stringToRawPath(value);
	}
	return !value ? console.warn("Expecting a <path> element or an SVG path data string") : _isString(value) ? stringToRawPath(value) : _isNumber(value[0]) ? [value] : value;
}
function reverseSegment(segment) {
	var i = 0, y;
	segment.reverse();
	for (; i < segment.length; i += 2) {
		y = segment[i];
		segment[i] = segment[i + 1];
		segment[i + 1] = y;
	}
	segment.reversed = !segment.reversed;
}
var _createPath = function _createPath(e, ignore) {
	var path = document.createElementNS("http://www.w3.org/2000/svg", "path"), attr = [].slice.call(e.attributes), i = attr.length, name;
	ignore = "," + ignore + ",";
	while (--i > -1) {
		name = attr[i].nodeName.toLowerCase();
		if (ignore.indexOf("," + name + ",") < 0) path.setAttributeNS(null, name, attr[i].nodeValue);
	}
	return path;
};
var _typeAttrs = {
	rect: "rx,ry,x,y,width,height",
	circle: "r,cx,cy",
	ellipse: "rx,ry,cx,cy",
	line: "x1,x2,y1,y2"
};
var _attrToObj = function _attrToObj(e, attrs) {
	var props = attrs ? attrs.split(",") : [], obj = {}, i = props.length;
	while (--i > -1) obj[props[i]] = +e.getAttribute(props[i]) || 0;
	return obj;
};
function convertToPath(element, swap) {
	var type = element.tagName.toLowerCase(), circ = .552284749831, data, x, y, r, ry, path, rcirc, rycirc, points, w, h, x2, x3, x4, x5, x6, y2, y3, y4, y5, y6, attr;
	if (type === "path" || !element.getBBox) return element;
	path = _createPath(element, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points");
	attr = _attrToObj(element, _typeAttrs[type]);
	if (type === "rect") {
		r = attr.rx;
		ry = attr.ry || r;
		x = attr.x;
		y = attr.y;
		w = attr.width - r * 2;
		h = attr.height - ry * 2;
		if (r || ry) {
			x2 = x + r * (1 - circ);
			x3 = x + r;
			x4 = x3 + w;
			x5 = x4 + r * circ;
			x6 = x4 + r;
			y2 = y + ry * (1 - circ);
			y3 = y + ry;
			y4 = y3 + h;
			y5 = y4 + ry * circ;
			y6 = y4 + ry;
			data = "M" + x6 + "," + y3 + " V" + y4 + " C" + [
				x6,
				y5,
				x5,
				y6,
				x4,
				y6,
				x4 - (x4 - x3) / 3,
				y6,
				x3 + (x4 - x3) / 3,
				y6,
				x3,
				y6,
				x2,
				y6,
				x,
				y5,
				x,
				y4,
				x,
				y4 - (y4 - y3) / 3,
				x,
				y3 + (y4 - y3) / 3,
				x,
				y3,
				x,
				y2,
				x2,
				y,
				x3,
				y,
				x3 + (x4 - x3) / 3,
				y,
				x4 - (x4 - x3) / 3,
				y,
				x4,
				y,
				x5,
				y,
				x6,
				y2,
				x6,
				y3
			].join(",") + "z";
		} else data = "M" + (x + w) + "," + y + " v" + h + " h" + -w + " v" + -h + " h" + w + "z";
	} else if (type === "circle" || type === "ellipse") {
		if (type === "circle") {
			r = ry = attr.r;
			rycirc = r * circ;
		} else {
			r = attr.rx;
			ry = attr.ry;
			rycirc = ry * circ;
		}
		x = attr.cx;
		y = attr.cy;
		rcirc = r * circ;
		data = "M" + (x + r) + "," + y + " C" + [
			x + r,
			y + rycirc,
			x + rcirc,
			y + ry,
			x,
			y + ry,
			x - rcirc,
			y + ry,
			x - r,
			y + rycirc,
			x - r,
			y,
			x - r,
			y - rycirc,
			x - rcirc,
			y - ry,
			x,
			y - ry,
			x + rcirc,
			y - ry,
			x + r,
			y - rycirc,
			x + r,
			y
		].join(",") + "z";
	} else if (type === "line") data = "M" + attr.x1 + "," + attr.y1 + " L" + attr.x2 + "," + attr.y2;
	else if (type === "polyline" || type === "polygon") {
		points = (element.getAttribute("points") + "").match(_numbersExp) || [];
		x = points.shift();
		y = points.shift();
		data = "M" + x + "," + y + " L" + points.join(",");
		if (type === "polygon") data += "," + x + "," + y + "z";
	}
	path.setAttribute("d", rawPathToString(path._gsRawPath = stringToRawPath(data)));
	if (swap && element.parentNode) {
		element.parentNode.insertBefore(path, element);
		element.parentNode.removeChild(element);
	}
	return path;
}
function measureSegment(segment, startIndex, bezierQty) {
	startIndex = startIndex || 0;
	if (!segment.samples) {
		segment.samples = [];
		segment.lookup = [];
	}
	var resolution = ~~segment.resolution || 12, inc = 1 / resolution, endIndex = bezierQty ? startIndex + bezierQty * 6 + 1 : segment.length, x1 = segment[startIndex], y1 = segment[startIndex + 1], samplesIndex = startIndex ? startIndex / 6 * resolution : 0, samples = segment.samples, lookup = segment.lookup, min = (startIndex ? segment.minLength : _largeNum) || _largeNum, prevLength = samples[samplesIndex + bezierQty * resolution - 1], length = startIndex ? samples[samplesIndex - 1] : 0, i, j, x4, x3, x2, xd, xd1, y4, y3, y2, yd, yd1, inv, t, lengthIndex, l, segLength;
	samples.length = lookup.length = 0;
	for (j = startIndex + 2; j < endIndex; j += 6) {
		x4 = segment[j + 4] - x1;
		x3 = segment[j + 2] - x1;
		x2 = segment[j] - x1;
		y4 = segment[j + 5] - y1;
		y3 = segment[j + 3] - y1;
		y2 = segment[j + 1] - y1;
		xd = xd1 = yd = yd1 = 0;
		if (_abs(x4) < .01 && _abs(y4) < .01 && _abs(x2) + _abs(y2) < .01) {
			if (segment.length > 8) {
				segment.splice(j, 6);
				j -= 6;
				endIndex -= 6;
			}
		} else for (i = 1; i <= resolution; i++) {
			t = inc * i;
			inv = 1 - t;
			xd = xd1 - (xd1 = (t * t * x4 + 3 * inv * (t * x3 + inv * x2)) * t);
			yd = yd1 - (yd1 = (t * t * y4 + 3 * inv * (t * y3 + inv * y2)) * t);
			l = _sqrt$1(yd * yd + xd * xd);
			if (l < min) min = l;
			length += l;
			samples[samplesIndex++] = length;
		}
		x1 += x4;
		y1 += y4;
	}
	if (prevLength) {
		prevLength -= length;
		for (; samplesIndex < samples.length; samplesIndex++) samples[samplesIndex] += prevLength;
	}
	if (samples.length && min) {
		segment.totalLength = segLength = samples[samples.length - 1] || 0;
		segment.minLength = min;
		if (segLength / min < 9999) {
			l = lengthIndex = 0;
			for (i = 0; i < segLength; i += min) lookup[l++] = samples[lengthIndex] < i ? ++lengthIndex : lengthIndex;
		}
	} else segment.totalLength = samples[0] = 0;
	return startIndex ? length - samples[startIndex / 2 - 1] : length;
}
function cacheRawPathMeasurements(rawPath, resolution) {
	var pathLength, points, i;
	for (i = pathLength = points = 0; i < rawPath.length; i++) {
		rawPath[i].resolution = ~~resolution || 12;
		pathLength += measureSegment(rawPath[i]);
		points += rawPath[i].length;
	}
	rawPath.totalPoints = points;
	rawPath.totalLength = pathLength;
	return rawPath;
}
function transformRawPath(rawPath, a, b, c, d, tx, ty) {
	var j = rawPath.length, segment, l, i, x, y;
	while (--j > -1) {
		segment = rawPath[j];
		l = segment.length;
		for (i = 0; i < l; i += 2) {
			x = segment[i];
			y = segment[i + 1];
			segment[i] = x * a + y * c + tx;
			segment[i + 1] = x * b + y * d + ty;
		}
	}
	rawPath._dirty = 1;
	return rawPath;
}
function arcToSegment(lastX, lastY, rx, ry, angle, largeArcFlag, sweepFlag, x, y) {
	if (lastX === x && lastY === y) return;
	rx = _abs(rx);
	ry = _abs(ry);
	var angleRad = angle % 360 * _DEG2RAD, cosAngle = _cos$1(angleRad), sinAngle = _sin$1(angleRad), PI = Math.PI, TWOPI = PI * 2, dx2 = (lastX - x) / 2, dy2 = (lastY - y) / 2, x1 = cosAngle * dx2 + sinAngle * dy2, y1 = -sinAngle * dx2 + cosAngle * dy2, x1_sq = x1 * x1, y1_sq = y1 * y1, radiiCheck = x1_sq / (rx * rx) + y1_sq / (ry * ry);
	if (radiiCheck > 1) {
		rx = _sqrt$1(radiiCheck) * rx;
		ry = _sqrt$1(radiiCheck) * ry;
	}
	var rx_sq = rx * rx, ry_sq = ry * ry, sq = (rx_sq * ry_sq - rx_sq * y1_sq - ry_sq * x1_sq) / (rx_sq * y1_sq + ry_sq * x1_sq);
	if (sq < 0) sq = 0;
	var coef = (largeArcFlag === sweepFlag ? -1 : 1) * _sqrt$1(sq), cx1 = coef * (rx * y1 / ry), cy1 = coef * -(ry * x1 / rx), sx2 = (lastX + x) / 2, sy2 = (lastY + y) / 2, cx = sx2 + (cosAngle * cx1 - sinAngle * cy1), cy = sy2 + (sinAngle * cx1 + cosAngle * cy1), ux = (x1 - cx1) / rx, uy = (y1 - cy1) / ry, vx = (-x1 - cx1) / rx, vy = (-y1 - cy1) / ry, temp = ux * ux + uy * uy, angleStart = (uy < 0 ? -1 : 1) * Math.acos(ux / _sqrt$1(temp)), angleExtent = (ux * vy - uy * vx < 0 ? -1 : 1) * Math.acos((ux * vx + uy * vy) / _sqrt$1(temp * (vx * vx + vy * vy)));
	isNaN(angleExtent) && (angleExtent = PI);
	if (!sweepFlag && angleExtent > 0) angleExtent -= TWOPI;
	else if (sweepFlag && angleExtent < 0) angleExtent += TWOPI;
	angleStart %= TWOPI;
	angleExtent %= TWOPI;
	var segments = Math.ceil(_abs(angleExtent) / (TWOPI / 4)), rawPath = [], angleIncrement = angleExtent / segments, controlLength = 4 / 3 * _sin$1(angleIncrement / 2) / (1 + _cos$1(angleIncrement / 2)), ma = cosAngle * rx, mb = sinAngle * rx, mc = sinAngle * -ry, md = cosAngle * ry, i;
	for (i = 0; i < segments; i++) {
		angle = angleStart + i * angleIncrement;
		x1 = _cos$1(angle);
		y1 = _sin$1(angle);
		ux = _cos$1(angle += angleIncrement);
		uy = _sin$1(angle);
		rawPath.push(x1 - controlLength * y1, y1 + controlLength * x1, ux + controlLength * uy, uy - controlLength * ux, ux, uy);
	}
	for (i = 0; i < rawPath.length; i += 2) {
		x1 = rawPath[i];
		y1 = rawPath[i + 1];
		rawPath[i] = x1 * ma + y1 * mc + cx;
		rawPath[i + 1] = x1 * mb + y1 * md + cy;
	}
	rawPath[i - 2] = x;
	rawPath[i - 1] = y;
	return rawPath;
}
function stringToRawPath(d) {
	var a = (d + "").replace(_scientific, function(m) {
		var n = +m;
		return n < 1e-4 && n > -1e-4 ? 0 : n;
	}).match(_svgPathExp) || [], path = [], relativeX = 0, relativeY = 0, twoThirds = 2 / 3, elements = a.length, points = 0, errorMessage = "ERROR: malformed path: " + d, i, j, x, y, command, isRelative, segment, startX, startY, difX, difY, beziers, prevCommand, flag1, flag2, line = function line(sx, sy, ex, ey) {
		difX = (ex - sx) / 3;
		difY = (ey - sy) / 3;
		segment.push(sx + difX, sy + difY, ex - difX, ey - difY, ex, ey);
	};
	if (!d || !isNaN(a[0]) || isNaN(a[1])) {
		console.log(errorMessage);
		return path;
	}
	for (i = 0; i < elements; i++) {
		prevCommand = command;
		if (isNaN(a[i])) {
			command = a[i].toUpperCase();
			isRelative = command !== a[i];
		} else i--;
		x = +a[i + 1];
		y = +a[i + 2];
		if (isRelative) {
			x += relativeX;
			y += relativeY;
		}
		if (!i) {
			startX = x;
			startY = y;
		}
		if (command === "M") {
			if (segment) {
				if (segment.length < 8) path.length -= 1;
				else points += segment.length;
				_segmentIsClosed(segment);
			}
			relativeX = startX = x;
			relativeY = startY = y;
			segment = [x, y];
			path.push(segment);
			i += 2;
			command = "L";
		} else if (command === "C") {
			if (!segment) segment = [0, 0];
			if (!isRelative) relativeX = relativeY = 0;
			segment.push(x, y, relativeX + a[i + 3] * 1, relativeY + a[i + 4] * 1, relativeX += a[i + 5] * 1, relativeY += a[i + 6] * 1);
			i += 6;
		} else if (command === "S") {
			difX = relativeX;
			difY = relativeY;
			if (prevCommand === "C" || prevCommand === "S") {
				difX += relativeX - segment[segment.length - 4];
				difY += relativeY - segment[segment.length - 3];
			}
			if (!isRelative) relativeX = relativeY = 0;
			segment.push(difX, difY, x, y, relativeX += a[i + 3] * 1, relativeY += a[i + 4] * 1);
			i += 4;
		} else if (command === "Q") {
			difX = relativeX + (x - relativeX) * twoThirds;
			difY = relativeY + (y - relativeY) * twoThirds;
			if (!isRelative) relativeX = relativeY = 0;
			relativeX += a[i + 3] * 1;
			relativeY += a[i + 4] * 1;
			segment.push(difX, difY, relativeX + (x - relativeX) * twoThirds, relativeY + (y - relativeY) * twoThirds, relativeX, relativeY);
			i += 4;
		} else if (command === "T") {
			difX = relativeX - segment[segment.length - 4];
			difY = relativeY - segment[segment.length - 3];
			segment.push(relativeX + difX, relativeY + difY, x + (relativeX + difX * 1.5 - x) * twoThirds, y + (relativeY + difY * 1.5 - y) * twoThirds, relativeX = x, relativeY = y);
			i += 2;
		} else if (command === "H") {
			line(relativeX, relativeY, relativeX = x, relativeY);
			i += 1;
		} else if (command === "V") {
			line(relativeX, relativeY, relativeX, relativeY = x + (isRelative ? relativeY - relativeX : 0));
			i += 1;
		} else if (command === "L" || command === "Z") {
			if (command === "Z") {
				x = startX;
				y = startY;
				segment.closed = true;
			}
			if (command === "L" || _abs(relativeX - x) > .5 || _abs(relativeY - y) > .5) {
				line(relativeX, relativeY, x, y);
				if (command === "L") i += 2;
			}
			relativeX = x;
			relativeY = y;
		} else if (command === "A") {
			flag1 = a[i + 4];
			flag2 = a[i + 5];
			difX = a[i + 6];
			difY = a[i + 7];
			j = 7;
			if (flag1.length > 1) {
				if (flag1.length < 3) {
					difY = difX;
					difX = flag2;
					j--;
				} else {
					difY = flag2;
					difX = flag1.substr(2);
					j -= 2;
				}
				flag2 = flag1.charAt(1);
				flag1 = flag1.charAt(0);
			}
			beziers = arcToSegment(relativeX, relativeY, +a[i + 1], +a[i + 2], +a[i + 3], +flag1, +flag2, (isRelative ? relativeX : 0) + difX * 1, (isRelative ? relativeY : 0) + difY * 1);
			i += j;
			if (beziers) for (j = 0; j < beziers.length; j++) segment.push(beziers[j]);
			relativeX = segment[segment.length - 2];
			relativeY = segment[segment.length - 1];
		} else console.log(errorMessage);
	}
	i = segment.length;
	if (i < 6) {
		path.pop();
		i = 0;
	} else _segmentIsClosed(segment);
	path.totalPoints = points + i;
	return path;
}
function segmentToDistributedPoints(segment, totalPoints) {
	segment.samples || measureSegment(segment);
	var samples = segment.samples, lookup = segment.lookup, resolution = segment.resolution, totalLength = segment.totalLength, points = segment.slice(0, 2), curveStoppingPoints = [], l = segment.length - 4, i = 6, limit = .2, startLength = 0, curvePointsCumulative = 0, t, curvePoints, min, max, ci, ratioInc, j, inv, curveLength, length, a, nonSmooth, curveStoppingPointIndex, sampleIndex;
	for (; i < l; i += 6) if (Math.abs(_atan2$1(segment[i + 1] - segment[i - 1], segment[i] - segment[i - 2]) - _atan2$1(segment[i + 3] - segment[i + 1], segment[i + 2] - segment[i])) > limit) curveStoppingPoints.push(i);
	curveStoppingPoints.push(segment.length - 2);
	l = curveStoppingPoints.length;
	points.nonSmooth = nonSmooth = [1];
	if (totalPoints > l) {
		totalPoints -= l;
		for (ci = 0; ci < l; ci++) {
			curveStoppingPointIndex = curveStoppingPoints[ci];
			sampleIndex = Math.round(curveStoppingPointIndex / 6 * resolution);
			curveLength = samples[sampleIndex - 1] - startLength;
			curvePoints = Math.round(samples[sampleIndex - 1] / totalLength * totalPoints) - curvePointsCumulative;
			curvePointsCumulative += curvePoints;
			ratioInc = 1 / (curvePoints + 1);
			for (j = 1; j <= curvePoints; j++) {
				length = startLength + curveLength * j * ratioInc;
				i = lookup.length ? lookup[length < totalLength ? ~~(length / segment.minLength) : lookup.length - 1] || 0 : _getSampleIndex(samples, length, length / totalLength);
				min = i ? samples[i - 1] : 0;
				max = samples[i];
				if (max < length) {
					min = max;
					max = samples[++i];
				}
				t = 1 / resolution * ((length - min) / (max - min) + i % resolution) || 0;
				inv = 1 - t;
				i = ~~(i / resolution) * 6;
				a = segment[i];
				points.push(_round$2((t * t * (segment[i + 6] - a) + 3 * inv * (t * (segment[i + 4] - a) + inv * (segment[i + 2] - a))) * t + a), _round$2((t * t * (segment[i + 7] - (a = segment[i + 1])) + 3 * inv * (t * (segment[i + 5] - a) + inv * (segment[i + 3] - a))) * t + a));
			}
			nonSmooth[points.length] = 1;
			points.push(segment[curveStoppingPointIndex], segment[curveStoppingPointIndex + 1]);
			startLength += curveLength;
		}
	}
	i = segment.length - 2;
	if (segment.closed && Math.abs(_atan2$1(segment[i + 1] - segment[i - 1], segment[i] - segment[i - 2]) - _atan2$1(segment[3] - segment[1], segment[2] - segment[0])) <= limit) nonSmooth[0] = nonSmooth[nonSmooth.length - 1] = 0;
	return points;
}
function pointsToSegment(points, curviness) {
	_abs(points[0] - points[2]) < 1e-4 && _abs(points[1] - points[3]) < 1e-4 && (points = points.slice(2));
	var l = points.length - 2, x = +points[0], y = +points[1], nextX = +points[2], nextY = +points[3], segment = [
		x,
		y,
		x,
		y
	], dx2 = nextX - x, dy2 = nextY - y, nonSmooth = points.nonSmooth || [], closed = Math.abs(points[l] - x) < .001 && Math.abs(points[l + 1] - y) < .001, prevX, prevY, i, dx1, dy1, r1, r2, r3, tl, mx1, mx2, mxm, my1, my2, mym;
	if (!l) return [
		x,
		y,
		x,
		y,
		x,
		y,
		x,
		y
	];
	if (closed) {
		points.push(nextX, nextY);
		nextX = x;
		nextY = y;
		x = points[l - 2];
		y = points[l - 1];
		points.unshift(x, y);
		l += 4;
		nonSmooth = [0, 0].concat(nonSmooth);
	}
	curviness = curviness || curviness === 0 ? +curviness : 1;
	for (i = 2; i < l; i += 2) {
		prevX = x;
		prevY = y;
		x = nextX;
		y = nextY;
		nextX = +points[i + 2];
		nextY = +points[i + 3];
		if (x === nextX && y === nextY) continue;
		dx1 = dx2;
		dy1 = dy2;
		dx2 = nextX - x;
		dy2 = nextY - y;
		if (nonSmooth[i]) {
			segment.push(x - (x - prevX) / 4, y - (y - prevY) / 4, x, y, x + (nextX - x) / 4, y + (nextY - y) / 4);
			continue;
		}
		r1 = _sqrt$1(dx1 * dx1 + dy1 * dy1);
		r2 = _sqrt$1(dx2 * dx2 + dy2 * dy2);
		r3 = _sqrt$1(Math.pow(dx2 / r2 + dx1 / r1, 2) + Math.pow(dy2 / r2 + dy1 / r1, 2));
		tl = (r1 + r2) * curviness * .25 / r3;
		mx1 = x - (x - prevX) * (r1 ? tl / r1 : 0);
		mx2 = x + (nextX - x) * (r2 ? tl / r2 : 0);
		mxm = x - (mx1 + ((mx2 - mx1) * (r1 * 3 / (r1 + r2) + .5) / 4 || 0));
		my1 = y - (y - prevY) * (r1 ? tl / r1 : 0);
		my2 = y + (nextY - y) * (r2 ? tl / r2 : 0);
		mym = y - (my1 + ((my2 - my1) * (r1 * 3 / (r1 + r2) + .5) / 4 || 0));
		segment.push(_round$2(mx1 + mxm), _round$2(my1 + mym), _round$2(x), _round$2(y), _round$2(mx2 + mxm), _round$2(my2 + mym));
	}
	x !== nextX || y !== nextY || segment.length < 4 ? segment.push(_round$2(nextX), _round$2(nextY), _round$2(nextX), _round$2(nextY)) : segment.length -= 2;
	if (segment.length === 2) segment.push(x, y, x, y, x, y);
	else if (closed) {
		segment.splice(0, 6);
		segment.length -= 6;
	}
	segment.closed = closed;
	return segment;
}
function rawPathToString(rawPath) {
	if (_isNumber(rawPath[0])) rawPath = [rawPath];
	var result = "", l = rawPath.length, sl, s, i, segment;
	for (s = 0; s < l; s++) {
		segment = rawPath[s];
		result += "M" + _round$2(segment[0]) + "," + _round$2(segment[1]) + " C";
		sl = segment.length;
		for (i = 2; i < sl; i++) result += _round$2(segment[i++]) + "," + _round$2(segment[i++]) + " " + _round$2(segment[i++]) + "," + _round$2(segment[i++]) + " " + _round$2(segment[i++]) + "," + _round$2(segment[i]) + " ";
		if (segment.closed) result += "z";
	}
	return result;
}
//#endregion
//#region node_modules/gsap/CustomEase.js
/*!
* CustomEase 3.15.0
* https://gsap.com
*
* @license Copyright 2008-2026, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license
* @author: Jack Doyle, jack@greensock.com
*/
var gsap$1;
var _coreInitted$1;
var _getGSAP$1 = function _getGSAP() {
	return gsap$1 || typeof window !== "undefined" && (gsap$1 = window.gsap) && gsap$1.registerPlugin && gsap$1;
};
var _initCore$1 = function _initCore() {
	gsap$1 = _getGSAP$1();
	if (gsap$1) {
		gsap$1.registerEase("_CE", CustomEase.create);
		_coreInitted$1 = 1;
	} else console.warn("Please gsap.registerPlugin(CustomEase)");
};
var _bigNum$1 = 0x56bc75e2d63100000;
var _round$1 = function _round(value) {
	return ~~(value * 1e3 + (value < 0 ? -.5 : .5)) / 1e3;
};
var _bonusValidated = 1;
var _numExp$1 = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi;
var _needsParsingExp = /[cLlsSaAhHvVtTqQ]/g;
var _findMinimum = function _findMinimum(values) {
	var l = values.length, min = _bigNum$1, i;
	for (i = 1; i < l; i += 6) +values[i] < min && (min = +values[i]);
	return min;
};
var _normalize = function _normalize(values, height, originY) {
	if (!originY && originY !== 0) originY = Math.max(+values[values.length - 1], +values[1]);
	var tx = +values[0] * -1, ty = -originY, l = values.length, sx = 1 / (+values[l - 2] + tx), sy = -height || (Math.abs(+values[l - 1] - +values[1]) < .01 * (+values[l - 2] - +values[0]) ? _findMinimum(values) + ty : +values[l - 1] + ty), i;
	if (sy) sy = 1 / sy;
	else sy = -sx;
	for (i = 0; i < l; i += 2) {
		values[i] = (+values[i] + tx) * sx;
		values[i + 1] = (+values[i + 1] + ty) * sy;
	}
};
var _bezierToPoints = function _bezierToPoints(x1, y1, x2, y2, x3, y3, x4, y4, threshold, points, index) {
	var x12 = (x1 + x2) / 2, y12 = (y1 + y2) / 2, x23 = (x2 + x3) / 2, y23 = (y2 + y3) / 2, x34 = (x3 + x4) / 2, y34 = (y3 + y4) / 2, x123 = (x12 + x23) / 2, y123 = (y12 + y23) / 2, x234 = (x23 + x34) / 2, y234 = (y23 + y34) / 2, x1234 = (x123 + x234) / 2, y1234 = (y123 + y234) / 2, dx = x4 - x1, dy = y4 - y1, d2 = Math.abs((x2 - x4) * dy - (y2 - y4) * dx), d3 = Math.abs((x3 - x4) * dy - (y3 - y4) * dx), length;
	if (!points) {
		points = [{
			x: x1,
			y: y1
		}, {
			x: x4,
			y: y4
		}];
		index = 1;
	}
	points.splice(index || points.length - 1, 0, {
		x: x1234,
		y: y1234
	});
	if ((d2 + d3) * (d2 + d3) > threshold * (dx * dx + dy * dy)) {
		length = points.length;
		_bezierToPoints(x1, y1, x12, y12, x123, y123, x1234, y1234, threshold, points, index);
		_bezierToPoints(x1234, y1234, x234, y234, x34, y34, x4, y4, threshold, points, index + 1 + (points.length - length));
	}
	return points;
};
var CustomEase = /*#__PURE__*/ function() {
	function CustomEase(id, data, config) {
		_coreInitted$1 || _initCore$1();
		this.id = id;
		_bonusValidated && this.setData(data, config);
	}
	var _proto = CustomEase.prototype;
	_proto.setData = function setData(data, config) {
		config = config || {};
		data = data || "0,0,1,1";
		var values = data.match(_numExp$1), closest = 1, points = [], lookup = [], precision = config.precision || 1, fast = precision <= 1, l, a1, a2, i, inc, j, point, prevPoint, p;
		this.data = data;
		if (_needsParsingExp.test(data) || ~data.indexOf("M") && data.indexOf("C") < 0) values = stringToRawPath(data)[0];
		l = values.length;
		if (l === 4) {
			values.unshift(0, 0);
			values.push(1, 1);
			l = 8;
		} else if ((l - 2) % 6) throw "Invalid CustomEase";
		if (+values[0] !== 0 || +values[l - 2] !== 1) _normalize(values, config.height, config.originY);
		this.segment = values;
		for (i = 2; i < l; i += 6) {
			a1 = {
				x: +values[i - 2],
				y: +values[i - 1]
			};
			a2 = {
				x: +values[i + 4],
				y: +values[i + 5]
			};
			points.push(a1, a2);
			_bezierToPoints(a1.x, a1.y, +values[i], +values[i + 1], +values[i + 2], +values[i + 3], a2.x, a2.y, 1 / (precision * 2e5), points, points.length - 1);
		}
		l = points.length;
		for (i = 0; i < l; i++) {
			point = points[i];
			prevPoint = points[i - 1] || point;
			if ((point.x > prevPoint.x || prevPoint.y !== point.y && prevPoint.x === point.x || point === prevPoint) && point.x <= 1) {
				prevPoint.cx = point.x - prevPoint.x;
				prevPoint.cy = point.y - prevPoint.y;
				prevPoint.n = point;
				prevPoint.nx = point.x;
				if (fast && i > 1 && Math.abs(prevPoint.cy / prevPoint.cx - points[i - 2].cy / points[i - 2].cx) > 2) fast = 0;
				if (prevPoint.cx < closest) if (!prevPoint.cx) {
					prevPoint.cx = .001;
					if (i === l - 1) {
						prevPoint.x -= .001;
						closest = Math.min(closest, .001);
						fast = 0;
					}
				} else closest = prevPoint.cx;
			} else {
				points.splice(i--, 1);
				l--;
			}
		}
		l = 1 / closest + 1 | 0;
		inc = 1 / l;
		j = 0;
		point = points[0];
		if (fast) {
			for (i = 0; i < l; i++) {
				p = i * inc;
				if (point.nx < p) point = points[++j];
				a1 = point.y + (p - point.x) / point.cx * point.cy;
				lookup[i] = {
					x: p,
					cx: inc,
					y: a1,
					cy: 0,
					nx: 9
				};
				if (i) lookup[i - 1].cy = a1 - lookup[i - 1].y;
			}
			j = points[points.length - 1];
			lookup[l - 1].cy = j.y - a1;
			lookup[l - 1].cx = j.x - lookup[lookup.length - 1].x;
		} else {
			for (i = 0; i < l; i++) {
				if (point.nx < i * inc) point = points[++j];
				lookup[i] = point;
			}
			if (j < points.length - 1) lookup[i - 1] = points[points.length - 2];
		}
		this.ease = function(p) {
			var point = lookup[p * l | 0] || lookup[l - 1];
			if (point.nx < p) point = point.n;
			return point.y + (p - point.x) / point.cx * point.cy;
		};
		this.ease.custom = this;
		this.id && gsap$1 && gsap$1.registerEase(this.id, this.ease);
		return this;
	};
	_proto.getSVGData = function getSVGData(config) {
		return CustomEase.getSVGData(this, config);
	};
	CustomEase.create = function create(id, data, config) {
		return new CustomEase(id, data, config).ease;
	};
	CustomEase.register = function register(core) {
		gsap$1 = core;
		_initCore$1();
	};
	CustomEase.get = function get(id) {
		return gsap$1.parseEase(id);
	};
	CustomEase.getSVGData = function getSVGData(ease, config) {
		config = config || {};
		var width = config.width || 100, height = config.height || 100, x = config.x || 0, y = (config.y || 0) + height, e = gsap$1.utils.toArray(config.path)[0], a, slope, i, inc, tx, ty, precision, threshold, prevX, prevY;
		if (config.invert) {
			height = -height;
			y = 0;
		}
		if (typeof ease === "string") ease = gsap$1.parseEase(ease);
		if (ease.custom) ease = ease.custom;
		if (ease instanceof CustomEase) a = rawPathToString(transformRawPath([ease.segment.slice(0)], width, 0, 0, -height, x, y));
		else {
			a = [x, y];
			precision = Math.max(5, (config.precision || 1) * 200);
			inc = 1 / precision;
			precision += 2;
			threshold = 5 / precision;
			prevX = _round$1(x + inc * width);
			prevY = _round$1(y + ease(inc) * -height);
			slope = (prevY - y) / (prevX - x);
			for (i = 2; i < precision; i++) {
				tx = _round$1(x + i * inc * width);
				ty = _round$1(y + ease(i * inc) * -height);
				if (Math.abs((ty - prevY) / (tx - prevX) - slope) > threshold || i === precision - 1) {
					a.push(prevX, prevY);
					slope = (ty - prevY) / (tx - prevX);
				}
				prevX = tx;
				prevY = ty;
			}
			a = "M" + a.join(",");
		}
		e && e.setAttribute("d", a);
		return a;
	};
	return CustomEase;
}();
CustomEase.version = "3.15.0";
CustomEase.headless = true;
_getGSAP$1() && gsap$1.registerPlugin(CustomEase);
//#endregion
//#region node_modules/gsap/MorphSVGPlugin.js
/*!
* MorphSVGPlugin 3.15.0
* https://gsap.com
*
* @license Copyright 2008-2026, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license
* @author: Jack Doyle, jack@greensock.com
*/
function _extends() {
	_extends = Object.assign || function(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
		}
		return target;
	};
	return _extends.apply(this, arguments);
}
var gsap;
var _toArray;
var _lastLinkedAnchor;
var _coreInitted;
var PluginClass;
var _reverting;
var _getGSAP = function _getGSAP() {
	return gsap || typeof window !== "undefined" && (gsap = window.gsap) && gsap.registerPlugin && gsap;
};
var _isFunction = function _isFunction(value) {
	return typeof value === "function";
};
var _atan2 = Math.atan2;
var _cos = Math.cos;
var _sin = Math.sin;
var _sqrt = Math.sqrt;
var _PI = Math.PI;
var _2PI = _PI * 2;
var _angleMin = _PI * .3;
var _angleMax = _PI * .7;
var _bigNum = 0x56bc75e2d63100000;
var _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi;
var _selectorExp = /(^[#.][a-z]|[a-y][a-z])/i;
var _commands = /[achlmqstvz]/i;
var _log = function _log(message) {
	return console && console.warn(message);
};
var _round = function _round(value) {
	return Math.round(value * 1e5) / 1e5 || 0;
};
var _getAverageXY = function _getAverageXY(segment) {
	var l = segment.length, x = 0, y = 0, i;
	for (i = 0; i < l; i++) {
		x += segment[i++];
		y += segment[i];
	}
	return [x / (l / 2), y / (l / 2)];
};
var _getSize = function _getSize(segment) {
	var l = segment.length, xMax = segment[0], xMin = xMax, yMax = segment[1], yMin = yMax, x, y, i;
	for (i = 6; i < l; i += 6) {
		x = segment[i];
		y = segment[i + 1];
		if (x > xMax) xMax = x;
		else if (x < xMin) xMin = x;
		if (y > yMax) yMax = y;
		else if (y < yMin) yMin = y;
	}
	segment.centerX = (xMax + xMin) / 2;
	segment.centerY = (yMax + yMin) / 2;
	return segment.size = (xMax - xMin) * (yMax - yMin);
};
var _getTotalSize = function _getTotalSize(rawPath, samplesPerBezier) {
	if (samplesPerBezier === void 0) samplesPerBezier = 3;
	var j = rawPath.length, xMax = rawPath[0][0], xMin = xMax, yMax = rawPath[0][1], yMin = yMax, inc = 1 / samplesPerBezier, l, x, y, i, segment, k, t, inv, x1, y1, x2, x3, x4, y2, y3, y4;
	while (--j > -1) {
		segment = rawPath[j];
		l = segment.length;
		for (i = 6; i < l; i += 6) {
			x1 = segment[i];
			y1 = segment[i + 1];
			x2 = segment[i + 2] - x1;
			y2 = segment[i + 3] - y1;
			x3 = segment[i + 4] - x1;
			y3 = segment[i + 5] - y1;
			x4 = segment[i + 6] - x1;
			y4 = segment[i + 7] - y1;
			k = samplesPerBezier;
			while (--k > -1) {
				t = inc * k;
				inv = 1 - t;
				x = (t * t * x4 + 3 * inv * (t * x3 + inv * x2)) * t + x1;
				y = (t * t * y4 + 3 * inv * (t * y3 + inv * y2)) * t + y1;
				if (x > xMax) xMax = x;
				else if (x < xMin) xMin = x;
				if (y > yMax) yMax = y;
				else if (y < yMin) yMin = y;
			}
		}
	}
	rawPath.centerX = (xMax + xMin) / 2;
	rawPath.centerY = (yMax + yMin) / 2;
	rawPath.left = xMin;
	rawPath.width = xMax - xMin;
	rawPath.top = yMin;
	rawPath.height = yMax - yMin;
	return rawPath.size = (xMax - xMin) * (yMax - yMin);
};
var _sortByComplexity = function _sortByComplexity(a, b) {
	return b.length - a.length;
};
var _sortBySize = function _sortBySize(a, b) {
	var sizeA = a.size || _getSize(a), sizeB = b.size || _getSize(b);
	return Math.abs(sizeB - sizeA) < (sizeA + sizeB) / 20 ? b.centerX - a.centerX || b.centerY - a.centerY : sizeB - sizeA;
};
var _offsetSegment = function _offsetSegment(segment, shapeIndex) {
	var a = segment.slice(0), l = segment.length, wrap = l - 2, i, index;
	shapeIndex = shapeIndex | 0;
	for (i = 0; i < l; i++) {
		index = (i + shapeIndex) % wrap;
		segment[i++] = a[index];
		segment[i] = a[index + 1];
	}
};
var _getTotalMovement = function _getTotalMovement(sb, eb, shapeIndex, offsetX, offsetY) {
	var l = sb.length, d = 0, wrap = l - 2, index, i, x, y;
	shapeIndex *= 6;
	for (i = 0; i < l; i += 6) {
		index = (i + shapeIndex) % wrap;
		y = sb[index] - (eb[i] - offsetX);
		x = sb[index + 1] - (eb[i + 1] - offsetY);
		d += _sqrt(x * x + y * y);
	}
	return d;
};
var _getClosestShapeIndex = function _getClosestShapeIndex(sb, eb, checkReverse) {
	var l = sb.length, sCenter = _getAverageXY(sb), eCenter = _getAverageXY(eb), offsetX = eCenter[0] - sCenter[0], offsetY = eCenter[1] - sCenter[1], min = _getTotalMovement(sb, eb, 0, offsetX, offsetY), minIndex = 0, copy, d, i;
	for (i = 6; i < l; i += 6) {
		d = _getTotalMovement(sb, eb, i / 6, offsetX, offsetY);
		if (d < min) {
			min = d;
			minIndex = i;
		}
	}
	if (checkReverse) {
		copy = sb.slice(0);
		reverseSegment(copy);
		for (i = 6; i < l; i += 6) {
			d = _getTotalMovement(copy, eb, i / 6, offsetX, offsetY);
			if (d < min) {
				min = d;
				minIndex = -i;
			}
		}
	}
	return minIndex / 6;
};
var _getClosestAnchor = function _getClosestAnchor(rawPath, x, y) {
	var j = rawPath.length, closestDistance = _bigNum, closestX = 0, closestY = 0, segment, dx, dy, d, i, l;
	while (--j > -1) {
		segment = rawPath[j];
		l = segment.length;
		for (i = 0; i < l; i += 6) {
			dx = segment[i] - x;
			dy = segment[i + 1] - y;
			d = _sqrt(dx * dx + dy * dy);
			if (d < closestDistance) {
				closestDistance = d;
				closestX = segment[i];
				closestY = segment[i + 1];
			}
		}
	}
	return [closestX, closestY];
};
var _getClosestSegment = function _getClosestSegment(bezier, pool, startIndex, sortRatio, offsetX, offsetY) {
	var l = pool.length, index = 0, minSize = Math.min(bezier.size || _getSize(bezier), pool[startIndex].size || _getSize(pool[startIndex])) * sortRatio, min = _bigNum, cx = bezier.centerX + offsetX, cy = bezier.centerY + offsetY, size, i, dx, dy, d;
	for (i = startIndex; i < l; i++) {
		size = pool[i].size || _getSize(pool[i]);
		if (size < minSize) break;
		dx = pool[i].centerX - cx;
		dy = pool[i].centerY - cy;
		d = _sqrt(dx * dx + dy * dy);
		if (d < min) {
			index = i;
			min = d;
		}
	}
	d = pool[index];
	pool.splice(index, 1);
	return d;
};
var _addAnchorsToBezier = function _addAnchorsToBezier(segment, i, quantity) {
	if (quantity === void 0) quantity = 1;
	var ax = segment[i], ay = segment[i + 1], cp1x = segment[i + 2], cp1y = segment[i + 3], cp2x = segment[i + 4], cp2y = segment[i + 5], bx = segment[i + 6], by = segment[i + 7], t, x1a, x2, y1a, y2, x1, y1, x2a, y2a;
	while (quantity-- > 0) {
		t = 1 - 1 / (quantity + 2);
		x1a = ax + (cp1x - ax) * t;
		x2 = cp1x + (cp2x - cp1x) * t;
		y1a = ay + (cp1y - ay) * t;
		y2 = cp1y + (cp2y - cp1y) * t;
		x1 = x1a + (x2 - x1a) * t;
		y1 = y1a + (y2 - y1a) * t;
		x2a = cp2x + (bx - cp2x) * t;
		y2a = cp2y + (by - cp2y) * t;
		x2 += (x2a - x2) * t;
		y2 += (y2a - y2) * t;
		segment.splice(i + 2, 4, cp1x = _round(x1a), cp1y = _round(y1a), cp2x = _round(x1), cp2y = _round(y1), bx = _round(x1 + (x2 - x1) * t), by = _round(y1 + (y2 - y1) * t), _round(x2), _round(y2), _round(x2a), _round(y2a));
	}
};
var _getLargestIndex = function _getLargestIndex(a) {
	var i = a.length, max = -_bigNum, largestIndex;
	while (i--) if (a[i] > max) {
		max = a[i];
		largestIndex = i;
	}
	return largestIndex;
};
var _subdivideSegmentQty = function _subdivideSegmentQty(segment, quantity) {
	var distances = [], anchorsToAdd = [], l = segment.length - 2, i = 0;
	for (; i < l; i += 6) distances.push(Math.pow(segment[i] - segment[i + 6], 2) + Math.pow(segment[i + 1] - segment[i + 7], 2));
	while (quantity--) {
		i = _getLargestIndex(distances);
		anchorsToAdd[i] = l = (anchorsToAdd[i] || 0) + 1;
		distances[i] *= l / (l + 1);
	}
	i = distances.length;
	while (i--) anchorsToAdd[i] && _addAnchorsToBezier(segment, i * 6, anchorsToAdd[i]);
};
var _getDefaultSmoothPoints = function _getDefaultSmoothPoints(rawPath, skipMeasure) {
	skipMeasure || cacheRawPathMeasurements(rawPath);
	return Math.max(4, Math.round(rawPath.totalLength / 4));
};
var _cloneAndSortRawPath = function _cloneAndSortRawPath(ar) {
	return ar.slice(0).sort(_sortByComplexity);
};
var _segmentCanBeIgnored = function _segmentCanBeIgnored(segment) {
	var x = segment[0], y = segment[1], i = 2;
	for (; i < segment.length; i += 2) if (Math.abs(segment[i] - x) > .01 || Math.abs(segment[i + 1] - y) > .01) return false;
	return true;
};
var _smoothRawPath = function _smoothRawPath(rawPath, config) {
	config = config || {};
	var _config = config, redraw = _config.redraw, points = _config.points, _config$maxSegments = _config.maxSegments, maxSegments = _config$maxSegments === void 0 ? 999 : _config$maxSegments, pointsAdded = 0, sortedRawPath = rawPath, templateRawPath = Array.isArray(points) ? points : 0, segmentPointsToAdd, j, segment, smoothSegment, anchorDistance;
	redraw = redraw !== false;
	if (redraw) cacheRawPathMeasurements(rawPath);
	else {
		rawPath.totalPoints = 0;
		j = rawPath.length;
		while (j--) rawPath.totalPoints += rawPath[j].length;
	}
	if (templateRawPath) {
		sortedRawPath = _cloneAndSortRawPath(rawPath);
		templateRawPath = _cloneAndSortRawPath(templateRawPath);
		anchorDistance = templateRawPath[0].totalLength / Math.round(templateRawPath[0].length / 6);
	} else {
		if (!points || points === "auto") {
			points = _getDefaultSmoothPoints(rawPath, redraw);
			redraw || (points -= Math.round(rawPath.totalPoints / 6));
		}
		points = Math.max(redraw ? 10 : 4, Math.min(999, points));
	}
	for (j = 0; j < sortedRawPath.length; j++) {
		segment = sortedRawPath[j];
		segmentPointsToAdd = Math.max(redraw ? 10 : 4, templateRawPath ? Math.round(templateRawPath[j] ? templateRawPath[j].length / 6 : sortedRawPath[j].totalLength / anchorDistance || 0) : Math.round((pointsAdded / points + (redraw ? segment.totalLength / rawPath.totalLength : segment.length / rawPath.totalPoints)) * points) - pointsAdded);
		if (j >= maxSegments || templateRawPath && (!templateRawPath[j] || _segmentCanBeIgnored(templateRawPath[j]))) {} else if (redraw) {
			var _segment;
			smoothSegment = pointsToSegment(segmentToDistributedPoints(segment, segmentPointsToAdd), config.curviness);
			segment.length = 0;
			(_segment = segment).push.apply(_segment, smoothSegment);
		} else _subdivideSegmentQty(segment, segmentPointsToAdd);
		pointsAdded += segmentPointsToAdd;
	}
	return rawPath;
};
var _equalizeSegmentQuantity = function _equalizeSegmentQuantity(start, end, shapeIndex, map, fillSafe) {
	var dif = end.length - start.length, longer = dif > 0 ? end : start, shorter = dif > 0 ? start : end, added = 0, sortMethod = map === "complexity" ? _sortByComplexity : _sortBySize, sortRatio = map === "position" ? 0 : typeof map === "number" ? map : .8, i = shorter.length, shapeIndices = typeof shapeIndex === "object" && shapeIndex.push ? shapeIndex.slice(0) : [shapeIndex], reverse = shapeIndices[0] === "reverse" || shapeIndices[0] < 0, log = shapeIndex === "log", eb, sb, b, x, y, offsetX, offsetY;
	if (!shorter[0]) return;
	if (longer.length > 1) {
		start.sort(sortMethod);
		end.sort(sortMethod);
		longer.size || _getTotalSize(longer);
		shorter.size || _getTotalSize(shorter);
		offsetX = longer.centerX - shorter.centerX;
		offsetY = longer.centerY - shorter.centerY;
		if (sortMethod === _sortBySize) for (i = 0; i < shorter.length; i++) longer.splice(i, 0, _getClosestSegment(shorter[i], longer, i, sortRatio, offsetX, offsetY));
	}
	if (dif) {
		dif < 0 && (dif = -dif);
		longer[0].length > shorter[0].length && _subdivideSegmentQty(shorter[0], (longer[0].length - shorter[0].length) / 6 | 0);
		i = shorter.length;
		while (added < dif) {
			x = longer[i].size || _getSize(longer[i]);
			b = _getClosestAnchor(shorter, longer[i].centerX, longer[i].centerY);
			x = b[0];
			y = b[1];
			shorter[i++] = [
				x,
				y,
				x,
				y,
				x,
				y,
				x,
				y
			];
			shorter.totalPoints += 8;
			added++;
		}
	}
	for (i = 0; i < start.length; i++) {
		eb = end[i];
		sb = start[i];
		dif = eb.length - sb.length;
		if (dif < 0) _subdivideSegmentQty(eb, -dif / 6 | 0);
		else if (dif > 0) _subdivideSegmentQty(sb, dif / 6 | 0);
		if (reverse && fillSafe !== false && !sb.reversed) reverseSegment(sb);
		shapeIndex = shapeIndices[i] || shapeIndices[i] === 0 ? shapeIndices[i] : "auto";
		if (shapeIndex) {
			if (sb.closed || Math.abs(sb[0] - sb[sb.length - 2]) < .5 && Math.abs(sb[1] - sb[sb.length - 1]) < .5) {
				if (shapeIndex === "auto" || shapeIndex === "log") {
					shapeIndices[i] = shapeIndex = _getClosestShapeIndex(sb, eb, !i || fillSafe === false);
					if (shapeIndex < 0) {
						reverse = true;
						reverseSegment(sb);
						shapeIndex = -shapeIndex;
					}
					_offsetSegment(sb, shapeIndex * 6);
				} else if (shapeIndex !== "reverse") {
					if (i && shapeIndex < 0) reverseSegment(sb);
					_offsetSegment(sb, (shapeIndex < 0 ? -shapeIndex : shapeIndex) * 6);
				}
			} else if (!reverse && (shapeIndex === "auto" && Math.abs(eb[0] - sb[0]) + Math.abs(eb[1] - sb[1]) + Math.abs(eb[eb.length - 2] - sb[sb.length - 2]) + Math.abs(eb[eb.length - 1] - sb[sb.length - 1]) > Math.abs(eb[0] - sb[sb.length - 2]) + Math.abs(eb[1] - sb[sb.length - 1]) + Math.abs(eb[eb.length - 2] - sb[0]) + Math.abs(eb[eb.length - 1] - sb[1]) || shapeIndex % 2)) {
				reverseSegment(sb);
				shapeIndices[i] = -1;
				reverse = true;
			} else if (shapeIndex === "auto") shapeIndices[i] = 0;
			else if (shapeIndex === "reverse") shapeIndices[i] = -1;
			if (sb.closed !== eb.closed) sb.closed = eb.closed = false;
		}
	}
	log && _log("shapeIndex:[" + shapeIndices.join(",") + "]");
	start.shapeIndex = shapeIndices;
	return shapeIndices;
};
var _pathFilter = function _pathFilter(a, shapeIndex, map, precompile, fillSafe) {
	var start = stringToRawPath(a[0]), end = stringToRawPath(a[1]);
	if (!_equalizeSegmentQuantity(start, end, shapeIndex || shapeIndex === 0 ? shapeIndex : "auto", map, fillSafe)) return;
	a[0] = rawPathToString(start);
	a[1] = rawPathToString(end);
	(precompile === "log" || precompile === true) && _log("precompile:[\"" + a[0] + "\",\"" + a[1] + "\"]");
};
var _offsetPoints = function _offsetPoints(text, offset) {
	if (!offset) return text;
	var a = text.match(_numExp) || [], l = a.length, s = "", inc, i, j;
	if (offset === "reverse") {
		i = l - 1;
		inc = -2;
	} else {
		i = ((parseInt(offset, 10) || 0) * 2 + 1 + l * 100) % l;
		inc = 2;
	}
	for (j = 0; j < l; j += 2) {
		s += a[i - 1] + "," + a[i] + " ";
		i = (i + inc) % l;
	}
	return s;
};
var _equalizePointQuantity = function _equalizePointQuantity(a, quantity) {
	var tally = 0, x = parseFloat(a[0]), y = parseFloat(a[1]), s = x + "," + y + " ", max = .999999, newPointsPerSegment, i, l = a.length, j, factor, nextX, nextY;
	newPointsPerSegment = quantity * .5 / (l * .5 - 1);
	for (i = 0; i < l - 2; i += 2) {
		tally += newPointsPerSegment;
		nextX = parseFloat(a[i + 2]);
		nextY = parseFloat(a[i + 3]);
		if (tally > max) {
			factor = 1 / (Math.floor(tally) + 1);
			j = 1;
			while (tally > max) {
				s += (x + (nextX - x) * factor * j).toFixed(2) + "," + (y + (nextY - y) * factor * j).toFixed(2) + " ";
				tally--;
				j++;
			}
		}
		s += nextX + "," + nextY + " ";
		x = nextX;
		y = nextY;
	}
	return s;
};
var _pointsFilter = function _pointsFilter(a) {
	var startNums = a[0].match(_numExp) || [], endNums = a[1].match(_numExp) || [], dif = endNums.length - startNums.length;
	if (dif > 0) a[0] = _equalizePointQuantity(startNums, dif);
	else a[1] = _equalizePointQuantity(endNums, -dif);
};
var _buildPointsFilter = function _buildPointsFilter(shapeIndex) {
	return !isNaN(shapeIndex) ? function(a) {
		_pointsFilter(a);
		a[1] = _offsetPoints(a[1], parseInt(shapeIndex, 10));
	} : _pointsFilter;
};
var _parseShape = function _parseShape(shape, forcePath, target) {
	var isString = typeof shape === "string", e, type;
	if (!isString || _selectorExp.test(shape) || (shape.match(_numExp) || []).length < 3) {
		e = _toArray(shape)[0];
		if (e) {
			type = (e.nodeName + "").toUpperCase();
			if (forcePath && type !== "PATH") {
				e = convertToPath(e, false);
				type = "PATH";
			}
			shape = e.getAttribute(type === "PATH" ? "d" : "points") || "";
			if (e === target) shape = e.getAttributeNS(null, "data-original") || shape;
		} else {
			_log("WARNING: invalid morph to: " + shape);
			shape = false;
		}
	}
	return shape;
};
var _recordControlPointData = function _recordControlPointData(rawPath) {
	var j = rawPath.length, segment, x, y, x2, y2, i, l, cpData;
	while (--j > -1) {
		segment = rawPath[j];
		cpData = segment.cpData = segment.cpData || [];
		cpData.length = 0;
		l = segment.length - 2;
		for (i = 0; i < l; i += 6) {
			x = segment[i] - segment[i + 2];
			y = segment[i + 1] - segment[i + 3];
			x2 = segment[i + 6] - segment[i + 4];
			y2 = segment[i + 7] - segment[i + 5];
			cpData[i + 2] = _atan2(y, x);
			cpData[i + 3] = _sqrt(x * x + y * y);
			cpData[i + 4] = _atan2(y2, x2);
			cpData[i + 5] = _sqrt(x2 * x2 + y2 * y2);
		}
	}
	return rawPath;
};
var _parseOriginFactors = function _parseOriginFactors(v) {
	var a = v.trim().split(" "), x = ~v.indexOf("left") ? 0 : ~v.indexOf("right") ? 100 : isNaN(parseFloat(a[0])) ? 50 : parseFloat(a[0]), y = ~v.indexOf("top") ? 0 : ~v.indexOf("bottom") ? 100 : isNaN(parseFloat(a[1])) ? 50 : parseFloat(a[1]);
	return {
		x: x / 100,
		y: y / 100
	};
};
var _shortAngle = function _shortAngle(dif) {
	return dif !== dif % _PI ? dif + (dif < 0 ? _2PI : -_2PI) : dif;
};
var _morphMessage = "Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.";
var _tweenRotation = function _tweenRotation(start, end, i, linkedPT) {
	var so = this._origin, eo = this._eOrigin, dx = start[i] - so.x, dy = start[i + 1] - so.y, d = _sqrt(dx * dx + dy * dy), sa = _atan2(dy, dx), angleDif, _short;
	dx = end[i] - eo.x;
	dy = end[i + 1] - eo.y;
	angleDif = _atan2(dy, dx) - sa;
	_short = _shortAngle(angleDif);
	if (!linkedPT && _lastLinkedAnchor && Math.abs(_short + _lastLinkedAnchor.ca) < _angleMin) linkedPT = _lastLinkedAnchor;
	return this._anchorPT = _lastLinkedAnchor = {
		_next: this._anchorPT,
		t: start,
		sa,
		ca: linkedPT && _short * linkedPT.ca < 0 && Math.abs(_short) > _angleMax ? angleDif : _short,
		sl: d,
		cl: _sqrt(dx * dx + dy * dy) - d,
		i
	};
};
var _initCore = function _initCore(required) {
	gsap = _getGSAP();
	PluginClass = PluginClass || gsap && gsap.plugins.morphSVG;
	if (gsap && PluginClass) {
		_toArray = gsap.utils.toArray;
		_reverting = gsap.core.reverting || function() {};
		PluginClass.prototype._tweenRotation = _tweenRotation;
		_coreInitted = 1;
	} else if (required) _log("Please gsap.registerPlugin(MorphSVGPlugin)");
};
var MorphSVGPlugin = {
	version: "3.15.0",
	name: "morphSVG",
	rawVars: 1,
	register: function register(core, Plugin) {
		gsap = core;
		PluginClass = Plugin;
		_initCore();
	},
	init: function init(target, value, tween, index, targets) {
		_coreInitted || _initCore(1);
		if (!value) {
			_log("invalid shape");
			return false;
		}
		_isFunction(value) && (value = value.call(tween, index, target, targets));
		var type, p, pt, shape, isPoly, shapeIndex, map, startCPData, endCPData, start, end, i, j, l, startSeg, endSeg, precompiled, originFactors, useRotation, curveMode;
		if (typeof value === "string" || value.getBBox || value[0]) value = { shape: value };
		else if (typeof value === "object") {
			type = {};
			for (p in value) type[p] = _isFunction(value[p]) && p !== "render" ? value[p].call(tween, index, target, targets) : value[p];
			value = type;
		}
		var cs = target.nodeType ? window.getComputedStyle(target) : {}, fill = cs.fill + "", fillSafe = !(fill === "none" || (fill.match(_numExp) || [])[3] === "0" || cs.fillRule === "evenodd"), smooth = value.smooth, origins = (value.origin || "50 50").split(",");
		smooth === true || smooth === "auto" ? smooth = {} : typeof smooth === "number" && (smooth = { points: smooth });
		type = (target.nodeName + "").toUpperCase();
		isPoly = type === "POLYLINE" || type === "POLYGON";
		if (type !== "PATH" && !isPoly && !value.prop) {
			_log("Cannot morph a <" + type + "> element. " + _morphMessage);
			return false;
		}
		p = type === "PATH" ? "d" : "points";
		if (!value.prop && !_isFunction(target.setAttribute)) return false;
		shape = _parseShape(value.shape || value.d || value.points || "", p === "d", target);
		if (isPoly && _commands.test(shape)) {
			_log("A <" + type + "> cannot accept path data. " + _morphMessage);
			return false;
		}
		shapeIndex = value.shapeIndex || value.shapeIndex === 0 ? value.shapeIndex : "auto";
		map = value.map || MorphSVGPlugin.defaultMap;
		this._prop = value.prop;
		this._render = value.render || MorphSVGPlugin.defaultRender;
		this._apply = "updateTarget" in value ? value.updateTarget : MorphSVGPlugin.defaultUpdateTarget;
		this._rnd = Math.pow(10, isNaN(value.precision) ? 2 : +value.precision);
		this._tween = tween;
		if (shape) {
			this._target = target;
			precompiled = typeof value.precompile === "object";
			start = this._original = this._prop ? target[this._prop] : target.getAttribute(p);
			if (!this._prop && !target.getAttributeNS(null, "data-original")) target.setAttributeNS(null, "data-original", start);
			if (p === "d" || this._prop) {
				start = stringToRawPath(precompiled ? value.precompile[0] : start);
				end = stringToRawPath(precompiled ? value.precompile[1] : shape);
				if (smooth) {
					j = start.length;
					while (--j) _segmentCanBeIgnored(start[j]) && start.splice(j, 1);
					_smoothRawPath(start, _extends({}, smooth, {
						points: +smooth.points || Math.max(_getDefaultSmoothPoints(start), _getDefaultSmoothPoints(end)),
						maxSegments: end.length
					}));
					_smoothRawPath(end, smooth.redraw === false ? smooth : _extends({}, smooth, { points: start }));
				}
				if (!precompiled && !_equalizeSegmentQuantity(start, end, shapeIndex, map, fillSafe)) return false;
				if (value.precompile === "log" || value.precompile === true) _log("precompile:[\"" + rawPathToString(start) + "\",\"" + rawPathToString(end) + "\"]");
				useRotation = (value.type || MorphSVGPlugin.defaultType) !== "linear";
				curveMode = value.curveMode || useRotation;
				_recordControlPointData(start);
				_recordControlPointData(end);
				if (useRotation) {
					start.size || _getTotalSize(start);
					end.size || _getTotalSize(end);
					originFactors = _parseOriginFactors(origins[0]);
					this._origin = start.origin = {
						x: start.left + originFactors.x * start.width,
						y: start.top + originFactors.y * start.height
					};
					origins[1] && (originFactors = _parseOriginFactors(origins[1]));
					this._eOrigin = {
						x: end.left + originFactors.x * end.width,
						y: end.top + originFactors.y * end.height
					};
				}
				this._rawPath = target._gsRawPath = start;
				j = start.length;
				while (--j > -1) {
					startSeg = start[j];
					endSeg = end[j];
					startCPData = startSeg.cpData;
					endCPData = endSeg.cpData;
					l = startSeg.length;
					_lastLinkedAnchor = 0;
					for (i = 0; i < l; i += 6) if (endSeg[i] !== startSeg[i] || endSeg[i + 1] !== startSeg[i + 1]) if (useRotation) pt = this._tweenRotation(startSeg, endSeg, i);
					else {
						pt = this.add(startSeg, i, startSeg[i], endSeg[i], 0, 0, 0, 0, 0, 1);
						pt = this.add(startSeg, i + 1, startSeg[i + 1], endSeg[i + 1], 0, 0, 0, 0, 0, 1) || pt;
					}
					for (i = 0; i < l; i += 2) if (curveMode && (startCPData[i] !== endCPData[i] || startCPData[i + 1] !== endCPData[i + 1]) && startCPData[i + 1] && endCPData[i + 1]) this._controlPT = {
						_next: this._controlPT,
						i,
						j,
						ai: i % 6 > 3 ? i + 2 : i - 2,
						sa: startCPData[i],
						ca: _shortAngle(endCPData[i] - startCPData[i]),
						sl: startCPData[i + 1],
						cl: endCPData[i + 1] - startCPData[i + 1]
					};
					else {
						endSeg[i] !== startSeg[i] && (pt = this.add(startSeg, i, startSeg[i], endSeg[i], 0, 0, 0, 0, 0, 1));
						endSeg[i + 1] !== startSeg[i + 1] && (pt = this.add(startSeg, i + 1, startSeg[i + 1], endSeg[i + 1], 0, 0, 0, 0, 0, 1) || pt);
					}
				}
			} else pt = this.add(target, "setAttribute", target.getAttribute(p) + "", shape + "", index, targets, 0, _buildPointsFilter(shapeIndex), p);
			if (useRotation) {
				this.add(this._origin, "x", this._origin.x, this._eOrigin.x, 0, 0, 0, 0, 0, 1);
				pt = this.add(this._origin, "y", this._origin.y, this._eOrigin.y, 0, 0, 0, 0, 0, 1);
			}
			if (pt) {
				this._props.push("morphSVG");
				pt.end = smooth && smooth.persist !== false ? rawPathToString(end) : shape;
				pt.endProp = p;
			}
		}
		return 1;
	},
	render: function render(ratio, data) {
		var rawPath = data._rawPath, controlPT = data._controlPT, anchorPT = data._anchorPT, rnd = data._rnd, target = data._target, pt = data._pt, s, space, segment, l, angle, i, j, sin, cos;
		while (pt) {
			pt.r(ratio, pt.d);
			pt = pt._next;
		}
		if (ratio === 1 && data._apply) {
			pt = data._pt;
			while (pt) {
				if (pt.end) if (data._prop) target[data._prop] = pt.end;
				else target.setAttribute(pt.endProp, pt.end);
				pt = pt._next;
			}
		} else if (rawPath) {
			while (anchorPT) {
				angle = anchorPT.sa + ratio * anchorPT.ca;
				l = anchorPT.sl + ratio * anchorPT.cl;
				anchorPT.t[anchorPT.i] = data._origin.x + _cos(angle) * l;
				anchorPT.t[anchorPT.i + 1] = data._origin.y + _sin(angle) * l;
				anchorPT = anchorPT._next;
			}
			while (controlPT) {
				segment = rawPath[controlPT.j];
				i = controlPT.i;
				angle = controlPT.sa + ratio * controlPT.ca;
				sin = _sin(angle);
				cos = _cos(angle);
				l = controlPT.sl + ratio * controlPT.cl;
				segment[i] = segment[controlPT.ai] - cos * l;
				segment[i + 1] = segment[controlPT.ai + 1] - sin * l;
				controlPT = controlPT._next;
			}
			if (!ratio && _reverting()) rawPath = stringToRawPath(data._original);
			target._gsRawPath = rawPath;
			if (data._apply) {
				s = "";
				space = " ";
				for (j = 0; j < rawPath.length; j++) {
					segment = rawPath[j];
					l = segment.length;
					s += "M" + (segment[0] * rnd | 0) / rnd + space + (segment[1] * rnd | 0) / rnd + " C";
					for (i = 2; i < l; i++) s += (segment[i] * rnd | 0) / rnd + space;
					segment.closed && (s += "z");
				}
				if (data._prop) target[data._prop] = s;
				else target.setAttribute("d", s);
			}
		}
		data._render && rawPath && data._render.call(data._tween, rawPath, target);
	},
	kill: function kill(property) {
		this._pt = this._rawPath = 0;
	},
	getRawPath,
	stringToRawPath,
	rawPathToString,
	smoothRawPath: _smoothRawPath,
	normalizeStrings: function normalizeStrings(shape1, shape2, _ref) {
		var shapeIndex = _ref.shapeIndex, map = _ref.map;
		var result = [shape1, shape2];
		_pathFilter(result, shapeIndex, map);
		return result;
	},
	pathFilter: _pathFilter,
	pointsFilter: _pointsFilter,
	getTotalSize: _getTotalSize,
	equalizeSegmentQuantity: _equalizeSegmentQuantity,
	convertToPath: function convertToPath$1(targets, swap) {
		return _toArray(targets).map(function(target) {
			return convertToPath(target, swap !== false);
		});
	},
	defaultType: "linear",
	defaultUpdateTarget: true,
	defaultMap: "size"
};
_getGSAP() && gsap.registerPlugin(MorphSVGPlugin);
//#endregion
//#region node_modules/@ngm-dev/mat-exp/fesm2022/ngm-dev-mat-exp.mjs
/** Change event object emitted by button toggle. */
var _c0 = ["*"];
var _c1 = ["container"];
var _c2 = ["rotator"];
var _c3 = ["springRotator"];
var _c4 = ["path"];
var MatExpSelectableButtonChange = class {
	source;
	value;
	constructor(source, value) {
		this.source = source;
		this.value = value;
	}
};
/**
* Deep factory that collapses the "InjectionToken + factory-provider that
* merges partial overrides down the injector tree" ceremony into a single
* call. Every `*.options.ts` file should call this once with its defaults
* and re-export `token` / `provide` / `inject` (optionally renamed).
*/
function matExpCreateOptions(defaults) {
	const token = new InjectionToken(ngDevMode ? "Options token" : "", { factory: () => defaults });
	const provide = (options) => ({
		provide: token,
		useFactory: () => ({
			...inject(token, {
				optional: true,
				skipSelf: true
			}) ?? defaults,
			...typeof options === "function" ? options() : options
		})
	});
	const injectOptions = () => inject(token);
	return {
		token,
		provide,
		inject: injectOptions
	};
}
/**
* @internal
*/
var MAT_EXP_BUTTON_DEFAULT_OPTIONS = {
	size: "s",
	shape: "round"
};
var _buttonOptions = matExpCreateOptions(MAT_EXP_BUTTON_DEFAULT_OPTIONS);
var MAT_EXP_BUTTON_OPTIONS = _buttonOptions.token;
var provideMatExpButtonOptions = _buttonOptions.provide;
var injectMatExpButtonOptions = _buttonOptions.inject;
/**
* @internal
*/
var MAT_EXP_BUTTON_GROUP_DEFAULT_OPTIONS = {
	size: "s",
	shape: "round",
	variant: "standard",
	selection: "single-select",
	disableBounce: false
};
var _buttonGroupOptions = matExpCreateOptions(MAT_EXP_BUTTON_GROUP_DEFAULT_OPTIONS);
var MAT_EXP_BUTTON_GROUP_OPTIONS = _buttonGroupOptions.token;
var provideMatExpButtonGroupOptions = _buttonGroupOptions.provide;
var injectMatExpButtonGroupOptions = _buttonGroupOptions.inject;
/**
* `ButtonGroupDefaults.ExpandedRatio` — the fraction of the pressed child's
* width by which it expands (and by which its neighbors are compressed).
* A middle child takes at most `ratio * width / 2` from *each* neighbor; an
* edge child takes at most `ratio * width` from its single neighbor, so the
* pressed child grows by up to 15% of its own width and the group's total
* width never changes.
*/
var BUTTON_GROUP_EXPANDED_RATIO = .15;
/**
* The expressive fast-spatial spring (`MotionSchemeKeyTokens.FastSpatial`):
* `spring(dampingRatio = 0.6f, stiffness = 800f)` with unit mass. With these
* constants the spring overshoots its target by ~9.5% once and settles from
* rest in ~330ms.
*/
var FAST_SPATIAL_SPRING = {
	dampingRatio: .6,
	stiffness: 800
};
/**
* `EnlargeOnPressNode` only starts the release (return-to-rest) animation once
* the press animation has progressed past this value — this is what makes a
* quick tap still read as one full, energetic bounce instead of an aborted
* blip.
*/
var BUTTON_GROUP_RELEASE_GATE = .75;
/**
* A segment is considered settled when its decay envelope shrinks below this
* fraction of the unit press range (mirrors Compose's
* `Spring.DefaultDisplacementThreshold`-style rest test).
*/
var REST_DELTA = .005;
/** Lower bound on a segment's duration so a near-settled retarget still eases. */
var MIN_SEGMENT_SECONDS = .05;
/**
* Solves the fast-spatial spring from initial position `from` and initial
* velocity `velocity` toward `target`. Standard second-order underdamped
* response for displacement u(t) = x(t) − target:
*
*   u(t) = e^(−λt) · (A·cos(ω_d t) + B·sin(ω_d t))
*   A = u₀,  B = (v₀ + λu₀) / ω_d
*
* with λ = ζω₀, ω₀ = √stiffness (unit mass), ω_d = ω₀·√(1−ζ²) — the same
* physics Compose's `SpringSimulation` solves. Because each segment starts
* from the *current* position and velocity, retargeting mid-flight (press →
* release) is velocity-continuous: no visible kink at the reversal, exactly
* like retargeting a Compose `Animatable`.
*/
function createFastSpatialSpringSegment(from, velocity, target) {
	const zeta = FAST_SPATIAL_SPRING.dampingRatio;
	const omega0 = Math.sqrt(FAST_SPATIAL_SPRING.stiffness);
	const lambda = zeta * omega0;
	const omegaD = omega0 * Math.sqrt(1 - zeta * zeta);
	const u0 = from - target;
	const coeffA = u0;
	const coeffB = (velocity + lambda * u0) / omegaD;
	return {
		durationSeconds: Math.max(MIN_SEGMENT_SECONDS, Math.log(Math.max(Math.hypot(coeffA, coeffB), REST_DELTA) / REST_DELTA) / lambda),
		valueAt(tSeconds) {
			return target + Math.exp(-lambda * tSeconds) * (coeffA * Math.cos(omegaD * tSeconds) + coeffB * Math.sin(omegaD * tSeconds));
		},
		velocityAt(tSeconds) {
			const decay = Math.exp(-lambda * tSeconds);
			const cos = Math.cos(omegaD * tSeconds);
			const sin = Math.sin(omegaD * tSeconds);
			return decay * ((coeffB * omegaD - lambda * coeffA) * cos - (coeffA * omegaD + lambda * coeffB) * sin);
		}
	};
}
/**
* Pure port of the width-redistribution pass in Compose's
* `ButtonGroupMeasurePolicy`: given the children's resting widths, which child
* is pressed and how far the press animation has progressed (0..1, may
* overshoot past 1 mid-spring), returns the widths to render this frame.
*
* - A middle child grows by `value * min(ratio·w/2, prevLimit, nextLimit)`
*   taken from *each* neighbor.
* - An edge child grows by `value * min(ratio·w, neighborLimit)` taken from
*   its single neighbor.
* - A neighbor is never compressed below zero, and the pressed child only
*   grows by what its neighbors actually gave up, so the summed width of the
*   group is invariant.
*
* `compressionLimits[i]` is child i's inline-end padding (Compose's
* `compressionLimit.calculateEndPadding(layoutDirection)`) — the most that
* child is allowed to squish. Unlike Compose we keep fractional pixels
* (CSS renders subpixel widths smoothly; Compose rounds because its layout
* is integer-based).
*/
function computeBouncedWidths(baseWidths, pressedIndex, pressedValue, compressionLimits, expandedRatio = BUTTON_GROUP_EXPANDED_RATIO) {
	const widths = [...baseWidths];
	const count = widths.length;
	if (count < 2 || pressedValue === 0 || pressedIndex < 0 || pressedIndex >= count) return widths;
	const pressedWidth = baseWidths[pressedIndex];
	if (pressedIndex > 0 && pressedIndex < count - 1) {
		const growth = pressedValue * Math.min(expandedRatio * pressedWidth / 2, compressionLimits[pressedIndex - 1], compressionLimits[pressedIndex + 1]);
		const growthLeft = Math.min(growth, widths[pressedIndex - 1]);
		const growthRight = Math.min(growth, widths[pressedIndex + 1]);
		widths[pressedIndex - 1] -= growthLeft;
		widths[pressedIndex + 1] -= growthRight;
		widths[pressedIndex] += growthLeft + growthRight;
	} else if (pressedIndex === 0) {
		const targetGrowth = pressedValue * Math.min(expandedRatio * pressedWidth, compressionLimits[1]);
		const growth = Math.min(targetGrowth, widths[1]);
		widths[1] -= growth;
		widths[0] += growth;
	} else {
		const targetGrowth = pressedValue * Math.min(expandedRatio * pressedWidth, compressionLimits[count - 2]);
		const growth = Math.min(targetGrowth, widths[count - 2]);
		widths[count - 2] -= growth;
		widths[count - 1] += growth;
	}
	return widths;
}
/**
* Creates the press-bounce driver for a standard button group. On `press`,
* the pressed child's width springs up by {@link BUTTON_GROUP_EXPANDED_RATIO}
* of its width (fast-spatial spring, visible overshoot) while its neighbors
* compress to keep the group's total width constant; on `release` everything
* springs back — velocity-continuously, from wherever the press spring
* currently is — and the inline widths are cleared so CSS regains ownership.
*
* Widths are written as fractional pixels straight to `style.width` (not via
* GSAP's CSS plugin, which auto-rounds layout properties to whole pixels —
* on a ~40px button whose whole excursion is ~7px, 1px quantization reads as
* visible stepping). GSAP still drives the clock: each spring segment is a
* linear tween of elapsed time on the global timeline.
*
* `getButtons` is re-read on every press so dynamically added/removed
* children are picked up. No-ops (leaving layout fully CSS-driven) when
* `prefers-reduced-motion: reduce` is active.
*/
function createButtonGroupBounce(getButtons) {
	let buttons = [];
	let baseWidths = [];
	let compressionLimits = [];
	let pressedIndex = -1;
	let released = false;
	let returning = false;
	let value = 0;
	let velocity = 0;
	let tween = null;
	const applyWidths = () => {
		const widths = computeBouncedWidths(baseWidths, pressedIndex, value, compressionLimits);
		for (let i = 0; i < buttons.length; i++) buttons[i].style.width = `${widths[i]}px`;
	};
	const clearWidths = () => {
		for (const button of buttons) button.style.removeProperty("width");
	};
	/**
	* Runs one spring segment from the current (value, velocity) toward
	* `target`, applying widths every tick. The proxy tween animates elapsed
	* time linearly; position/velocity come from the exact closed-form
	* solution, so motion is identical at any frame rate.
	*/
	const animateTo = (target, onSettled) => {
		tween?.kill();
		const segment = createFastSpatialSpringSegment(value, velocity, target);
		const clock = { t: 0 };
		tween = gsapWithCSS.to(clock, {
			t: segment.durationSeconds,
			duration: segment.durationSeconds,
			ease: "none",
			onUpdate: () => {
				value = segment.valueAt(clock.t);
				velocity = segment.velocityAt(clock.t);
				applyWidths();
				if (target === 1 && released && !returning && value > BUTTON_GROUP_RELEASE_GATE) startReturn();
			},
			onComplete: () => {
				value = target;
				velocity = 0;
				applyWidths();
				tween = null;
				onSettled();
			}
		});
	};
	const startReturn = () => {
		returning = true;
		animateTo(0, () => {
			clearWidths();
			pressedIndex = -1;
			returning = false;
		});
	};
	return {
		press(button) {
			if (prefersReducedMotion$1()) return;
			const nextButtons = getButtons();
			const index = nextButtons.indexOf(button);
			if (index < 0 || nextButtons.length < 2) return;
			if (tween !== null && index === pressedIndex && buttons === nextButtons) {
				released = false;
				returning = false;
				animateTo(1, () => {
					if (released) startReturn();
				});
				return;
			}
			tween?.kill();
			tween = null;
			clearWidths();
			value = 0;
			velocity = 0;
			buttons = nextButtons;
			pressedIndex = index;
			released = false;
			returning = false;
			baseWidths = buttons.map((el) => el.getBoundingClientRect().width);
			compressionLimits = buttons.map(readInlineEndPadding);
			animateTo(1, () => {
				if (released) startReturn();
			});
		},
		release() {
			if (pressedIndex < 0 || released || returning) return;
			released = true;
			if (value > BUTTON_GROUP_RELEASE_GATE) startReturn();
		},
		destroy() {
			tween?.kill();
			tween = null;
			clearWidths();
			pressedIndex = -1;
		}
	};
}
/**
* The most a child may be compressed by: its inline-end padding, the DOM
* equivalent of Compose's `compressionLimit.calculateEndPadding(layoutDirection)`.
*/
function readInlineEndPadding(element) {
	const style = getComputedStyle(element);
	const endPadding = style.direction === "rtl" ? style.paddingLeft : style.paddingRight;
	return parseFloat(endPadding) || 0;
}
function prefersReducedMotion$1() {
	return typeof window !== "undefined" && typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
/**
* @internal
*/
var MAT_EXP_ICON_BUTTON_DEFAULT_OPTIONS = {
	size: "s",
	shape: "round",
	width: "default",
	appearance: "text"
};
var _iconButtonOptions = matExpCreateOptions(MAT_EXP_ICON_BUTTON_DEFAULT_OPTIONS);
var MAT_EXP_ICON_BUTTON_OPTIONS = _iconButtonOptions.token;
var provideMatExpIconButtonOptions = _iconButtonOptions.provide;
var injectMatExpIconButtonOptions = _iconButtonOptions.inject;
/**
* Directive to style the Angular Material Icon Button component with latest Material 3 Design System Expressive styles.
*/
var MatExpIconButton = class MatExpIconButton {
	_options = injectMatExpIconButtonOptions();
	/**
	* Host element of the button, used by `MatExpButtonGroup` to drive the
	* press-bounce width animation on its projected children.
	* @internal
	*/
	_hostElement = inject(ElementRef).nativeElement;
	/** @default 's' */
	size = model(this._options.size, ...ngDevMode ? [{ debugName: "size" }] : 	/* istanbul ignore next */ []);
	/** @default 'round' */
	shape = model(this._options.shape, ...ngDevMode ? [{ debugName: "shape" }] : 	/* istanbul ignore next */ []);
	width = input(this._options.width, ...ngDevMode ? [{ debugName: "width" }] : 	/* istanbul ignore next */ []);
	/**
	* The toggle state of the icon button (`'selected' | 'unselected'`).
	*
	* Inside a `MatExpButtonGroup`, the group is the source of truth: it manages this model for
	* every projected button in response to clicks, keeping it in sync with the group's
	* single-/multi-select state.
	*
	* Standalone (outside a group), a click does **not** flip this value automatically — the
	* directive's click handler only delegates to a parent group when one is present. Toggling a
	* standalone button is consumer-driven: two-way bind `toggle` and flip it yourself in your own
	* `(click)` handler, e.g.
	* `[(toggle)]="state" (click)="state.set(state() === 'selected' ? 'unselected' : 'selected')"`.
	* This is an intentional, documented contract (see issue #188) — not a bug.
	*/
	toggle = model(this._options.toggle, ...ngDevMode ? [{ debugName: "toggle" }] : 	/* istanbul ignore next */ []);
	value = model(...ngDevMode ? [void 0, { debugName: "value" }] : 	/* istanbul ignore next */ []);
	/**
	* `aria-pressed`, derived from `toggle()`. `null` when the button does not
	* participate in toggle behavior, so the attribute is omitted entirely
	* rather than rendered as `aria-pressed="false"` (its mere presence changes
	* how assistive technology announces the control).
	* @internal
	*/
	ariaPressed = computed(() => {
		const toggle = this.toggle();
		return toggle === void 0 ? null : toggle === "selected" ? "true" : "false";
	}, ...ngDevMode ? [{ debugName: "ariaPressed" }] : 	/* istanbul ignore next */ []);
	_appearance = this._options.appearance;
	get appearance() {
		return this._appearance;
	}
	set appearance(appearance) {
		this._appearance = appearance;
	}
	/**
	* @internal
	*/
	matExpIconButtonClass = "mat-exp-icon-button";
	/**
	* @internal
	*/
	state = input(this._options.state, ...ngDevMode ? [{ debugName: "state" }] : 	/* istanbul ignore next */ []);
	get disabled() {
		return this.matIconButton.disabled;
	}
	set disabled(disabled) {
		this.matIconButton.disabled = disabled;
	}
	matIconButton = inject(MatIconButton);
	buttonGroup = inject(MatExpButtonGroup, { optional: true });
	_onButtonClick() {
		this.buttonGroup?._onButtonClick(this);
	}
	matMenu = inject(MatMenuTrigger, { optional: true });
	get isMenuOpen() {
		return this.matMenu?.menuOpen ?? false;
	}
	static ɵfac = function MatExpIconButton_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || MatExpIconButton)();
	};
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: MatExpIconButton,
		selectors: [[
			"",
			"matExpIconButton",
			""
		]],
		hostVars: 10,
		hostBindings: function MatExpIconButton_HostBindings(rf, ctx) {
			if (rf & 1) ɵɵlistener("click", function MatExpIconButton_click_HostBindingHandler() {
				return ctx._onButtonClick();
			});
			if (rf & 2) {
				ɵɵattribute("data-size", ctx.size())("data-shape", ctx.shape())("data-appearance", ctx.appearance)("data-state", ctx.state())("data-toggle", ctx.toggle())("data-width", ctx.width())("data-menu-open", ctx.isMenuOpen)("aria-pressed", ctx.ariaPressed());
				ɵɵclassMap(ctx.matExpIconButtonClass);
			}
		},
		inputs: {
			size: [1, "size"],
			shape: [1, "shape"],
			width: [1, "width"],
			toggle: [1, "toggle"],
			value: [1, "value"],
			appearance: "appearance",
			state: [1, "state"]
		},
		outputs: {
			size: "sizeChange",
			shape: "shapeChange",
			toggle: "toggleChange",
			value: "valueChange"
		},
		exportAs: ["matExpIconButton"]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpIconButton, [{
		type: Directive,
		args: [{
			selector: "[matExpIconButton]",
			host: {
				"[attr.data-size]": "size()",
				"[attr.data-shape]": "shape()",
				"[attr.data-appearance]": "appearance",
				"[attr.data-state]": "state()",
				"[attr.data-toggle]": "toggle()",
				"[attr.data-width]": "width()",
				"[attr.data-menu-open]": "isMenuOpen",
				"[attr.aria-pressed]": "ariaPressed()",
				"[class]": "matExpIconButtonClass",
				"(click)": "_onButtonClick()"
			},
			exportAs: "matExpIconButton"
		}]
	}], null, {
		size: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "size",
				required: false
			}]
		}, {
			type: Output,
			args: ["sizeChange"]
		}],
		shape: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "shape",
				required: false
			}]
		}, {
			type: Output,
			args: ["shapeChange"]
		}],
		width: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "width",
				required: false
			}]
		}],
		toggle: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "toggle",
				required: false
			}]
		}, {
			type: Output,
			args: ["toggleChange"]
		}],
		value: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "value",
				required: false
			}]
		}, {
			type: Output,
			args: ["valueChange"]
		}],
		appearance: [{ type: Input }],
		state: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "state",
				required: false
			}]
		}]
	});
})();
/** Adapts a `MatExpButton` directive instance to the `ButtonGroupChild` contract. */
var ButtonAdapter = class {
	button;
	constructor(button) {
		this.button = button;
	}
	setSize(size) {
		this.button.size.set(size);
	}
	setShape(shape) {
		this.button.shape.set(shape);
	}
	setAppearance(appearance) {
		this.button.appearance = appearance;
	}
	setDisabled(disabled) {
		this.button.disabled = disabled;
	}
};
/** Adapts a `MatExpIconButton` directive instance to the `ButtonGroupChild` contract. */
var IconButtonAdapter = class {
	button;
	constructor(button) {
		this.button = button;
	}
	setSize(size) {
		this.button.size.set(size);
	}
	setShape(shape) {
		this.button.shape.set(shape);
	}
	setAppearance(appearance) {
		this.button.appearance = appearance;
	}
	setDisabled(disabled) {
		this.button.disabled = disabled;
	}
};
/** Wraps a projected button/icon-button directive instance in its `ButtonGroupChild` adapter. */
function toButtonGroupChild(button) {
	return button instanceof MatExpIconButton ? new IconButtonAdapter(button) : new ButtonAdapter(button);
}
/**
* Registers the effects that broadcast `size`/`shape`/`appearance`/`disabled` from a
* group-like host (`MatExpButtonGroup`, `MatExpSplitButton`) down to its
* projected `ButtonGroupChild` instances.
*
* This is the single implementation of the broadcast-effect logic that was previously
* duplicated between `button-group.ts` and `split-button.ts`. Must be called from within
* an injection context (e.g. a component/directive constructor).
*
* @metaDescription Registers effects that broadcast size/shape/appearance/disabled from a group-like host to its projected children.
*/
function bindButtonGroupChildren(config) {
	const { children, size, shape, appearance, disabled } = config;
	if (size) effect(() => {
		const value = size();
		if (value) children().forEach((child) => child.setSize(value));
	});
	if (shape) effect(() => {
		const value = shape();
		if (value) children().forEach((child) => child.setShape(value));
	});
	if (appearance) effect(() => {
		const value = appearance();
		if (value) children().forEach((child) => child.setAppearance(value));
	});
	if (disabled) effect(() => {
		const value = disabled();
		children().forEach((child) => child.setDisabled(value ?? false));
	});
}
/**
* Injection token that can be used to reference instances of `MatExpButtonGroup`.
* It serves as alternative token to the actual `MatExpButtonGroup` class which
* could cause unnecessary retention of the class and its component metadata.
*/
var MAT_EXP_BUTTON_GROUP = new InjectionToken("MatExpButtonGroup");
/**
* Provider Expression that allows mat-exp-button-group to register as a ControlValueAccessor.
* This allows it to support [(ngModel)] and reactive forms.
* @docs-private
*/
var MAT_EXP_BUTTON_GROUP_VALUE_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => MatExpButtonGroup),
	multi: true
};
/**
* Component that groups buttons and provides single/multi-select behavior
* compatible with Angular reactive and template-driven forms.
*/
var MatExpButtonGroup = class MatExpButtonGroup {
	_options = injectMatExpButtonGroupOptions();
	/** @default 's' */
	size = input(this._options.size, ...ngDevMode ? [{ debugName: "size" }] : 	/* istanbul ignore next */ []);
	/** @default 'round' */
	shape = input(this._options.shape, ...ngDevMode ? [{ debugName: "shape" }] : 	/* istanbul ignore next */ []);
	/** @default 'single-select' */
	selection = input(this._options.selection, ...ngDevMode ? [{ debugName: "selection" }] : 	/* istanbul ignore next */ []);
	/** @default 'standard' */
	variant = input(this._options.variant, ...ngDevMode ? [{ debugName: "variant" }] : 	/* istanbul ignore next */ []);
	appearance = input(this._options.appearance, ...ngDevMode ? [{ debugName: "appearance" }] : 	/* istanbul ignore next */ []);
	disabled = model(this._options.disabled, ...ngDevMode ? [{ debugName: "disabled" }] : 	/* istanbul ignore next */ []);
	/**
	* Disables the M3 Expressive press-bounce animation (see `button-group.animation.ts`).
	* Only has an effect on the `standard` variant, which is the only variant the bounce ever
	* runs on.
	*
	* @default false
	*/
	disableBounce = input(this._options.disableBounce, ...ngDevMode ? [{ debugName: "disableBounce" }] : 	/* istanbul ignore next */ []);
	/** Emits when the selected value changes, either via user interaction or programmatic update. */
	selectionChange = output();
	_value;
	/**
	* The currently selected value. For `single-select` this is a single value;
	* for `multi-select` this is an array of values.
	*/
	get value() {
		return this._value;
	}
	set value(newValue) {
		this._setValueAndSync(newValue);
	}
	/**
	* @internal
	*/
	matExpButtonGroupClass = "mat-exp-button-group";
	_matExpButtons = contentChildren(MatExpButton, ...ngDevMode ? [{ debugName: "_matExpButtons" }] : 	/* istanbul ignore next */ []);
	_matExpIconButtons = contentChildren(MatExpIconButton, ...ngDevMode ? [{ debugName: "_matExpIconButtons" }] : 	/* istanbul ignore next */ []);
	_allExpressiveButtons = computed(() => [...this._matExpButtons(), ...this._matExpIconButtons()], ...ngDevMode ? [{ debugName: "_allExpressiveButtons" }] : 	/* istanbul ignore next */ []);
	/**
	* `_allExpressiveButtons` adapted to the narrow `ButtonGroupChild` contract, used to
	* broadcast `size`/`shape`/`appearance`/`disabled` without depending on the concrete
	* button directive types.
	* @internal
	*/
	_allButtonGroupChildren = computed(() => this._allExpressiveButtons().map(toButtonGroupChild), ...ngDevMode ? [{ debugName: "_allButtonGroupChildren" }] : 	/* istanbul ignore next */ []);
	/** Tracks which buttons are currently selected. */
	_selectionModel = new SelectionModel(false, void 0, false);
	_onChange = () => void 0;
	_onTouched = () => void 0;
	_cdr = inject(ChangeDetectorRef);
	_hostElement = inject(ElementRef).nativeElement;
	_ngZone = inject(NgZone);
	/**
	* Press-bounce driver for the M3 Expressive "standard button group"
	* interaction (see `button-group.animation.ts`). Created lazily in the
	* browser (`afterNextRender`), stays `null` on the server.
	*/
	_bounce = null;
	_interactionAbort = new AbortController();
	constructor() {
		effect(() => {
			const isMultiple = this.selection() === "multi-select";
			if (this._selectionModel.isMultipleSelection() !== isMultiple) {
				this._selectionModel = new SelectionModel(isMultiple, void 0, false);
				this._syncButtonsWithValue();
			}
		});
		effect(() => {
			if (this._allExpressiveButtons().length > 0) this._syncButtonsWithValue();
		});
		bindButtonGroupChildren({
			children: this._allButtonGroupChildren,
			size: this.size,
			shape: this.shape,
			appearance: this.appearance,
			disabled: this.disabled
		});
		afterNextRender(() => {
			this._bounce = createButtonGroupBounce(() => this._childButtonElements());
			this._ngZone.runOutsideAngular(() => this._setupBounceInteractions());
		});
		effect(() => {
			if (this.disableBounce()) this._bounce?.destroy();
		});
		inject(DestroyRef).onDestroy(() => {
			this._interactionAbort.abort();
			this._bounce?.destroy();
			this._bounce = null;
		});
	}
	/**
	* Projected button host elements in DOM order. The two `contentChildren`
	* queries are each in DOM order but are concatenated per type, so a mixed
	* group needs an explicit document-position sort.
	*/
	_childButtonElements() {
		return this._allExpressiveButtons().map((button) => button._hostElement).sort((a, b) => a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1);
	}
	/** Whether a press on `button` should run the bounce animation right now. */
	_canBounceOn(button) {
		return button !== null && this.variant() === "standard" && !this.disableBounce() && !this.disabled() && !button.disabled && button.getAttribute("aria-disabled") !== "true";
	}
	/**
	* Mirrors Compose's `EnlargeOnPressNode` interaction handling: pointer and
	* keyboard presses expand the pressed child; the release (or a cancel)
	* lets it spring back. `Enter` activates on keydown, so it is treated as a
	* press with an immediate release — the 0.75 release gate in the animation
	* still plays the full bounce.
	*/
	_setupBounceInteractions() {
		const host = this._hostElement;
		const signal = this._interactionAbort.signal;
		const findButton = (target) => {
			if (!(target instanceof Element)) return null;
			const button = target.closest(".mat-exp-button, .mat-exp-icon-button");
			return button !== null && host.contains(button) ? button : null;
		};
		host.addEventListener("pointerdown", (event) => {
			const button = findButton(event.target);
			if (!this._canBounceOn(button)) return;
			this._bounce?.press(button);
			const onRelease = () => {
				window.removeEventListener("pointerup", onRelease);
				window.removeEventListener("pointercancel", onRelease);
				this._bounce?.release();
			};
			window.addEventListener("pointerup", onRelease, { signal });
			window.addEventListener("pointercancel", onRelease, { signal });
		}, { signal });
		host.addEventListener("keydown", (event) => {
			if (event.repeat) return;
			const button = findButton(event.target);
			if (!this._canBounceOn(button)) return;
			if (event.key === " ") this._bounce?.press(button);
			else if (event.key === "Enter") {
				this._bounce?.press(button);
				this._bounce?.release();
			}
		}, { signal });
		host.addEventListener("keyup", (event) => {
			if (event.key === " ") this._bounce?.release();
		}, { signal });
	}
	writeValue(value) {
		this._setValueAndSync(value);
	}
	registerOnChange(fn) {
		this._onChange = fn;
	}
	registerOnTouched(fn) {
		this._onTouched = fn;
	}
	setDisabledState(isDisabled) {
		this.disabled.set(isDisabled);
	}
	/**
	* Handles a button click: toggles selection state, updates the value,
	* syncs toggle indicators, and notifies form infrastructure.
	* @internal
	*/
	_onButtonClick(button) {
		if (this._selectionModel.isSelected(button)) this._selectionModel.deselect(button);
		else {
			if (!this._selectionModel.isMultipleSelection()) this._selectionModel.clear();
			this._selectionModel.select(button);
		}
		this._updateValueFromModel();
		this._syncButtonToggleStates();
		this._onChange(this._value);
		this._onTouched();
		this.selectionChange.emit(new MatExpSelectableButtonChange(button, this._value));
	}
	_setValueAndSync(value) {
		this._value = value;
		this._syncButtonsWithValue();
	}
	/**
	* Reads `_value` and selects the matching button instances in the selection model,
	* then updates visual toggle states.
	*/
	_syncButtonsWithValue() {
		const buttons = this._allExpressiveButtons();
		if (!buttons.length) return;
		this._selectionModel.clear();
		const value = this._value;
		if (value !== null && value !== void 0) {
			const values = Array.isArray(value) ? value : [value];
			buttons.forEach((button) => {
				if (values.includes(button.value())) this._selectionModel.select(button);
			});
		}
		this._syncButtonToggleStates();
	}
	/** Applies `selected`/`unselected` toggle state to every projected button. */
	_syncButtonToggleStates() {
		this._allExpressiveButtons().forEach((button) => {
			button.toggle.set(this._selectionModel.isSelected(button) ? "selected" : "unselected");
		});
		this._cdr.markForCheck();
	}
	/** Derives `_value` from the current selection model state. */
	_updateValueFromModel() {
		const selected = this._selectionModel.selected;
		if (this._selectionModel.isMultipleSelection()) this._value = selected.map((b) => b.value());
		else this._value = selected.length > 0 ? selected[0].value() : void 0;
	}
	static ɵfac = function MatExpButtonGroup_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || MatExpButtonGroup)();
	};
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: MatExpButtonGroup,
		selectors: [["mat-exp-button-group"]],
		contentQueries: function MatExpButtonGroup_ContentQueries(rf, ctx, dirIndex) {
			if (rf & 1) ɵɵcontentQuerySignal(dirIndex, ctx._matExpButtons, MatExpButton, 4)(dirIndex, ctx._matExpIconButtons, MatExpIconButton, 4);
			if (rf & 2) ɵɵqueryAdvance(2);
		},
		hostAttrs: ["role", "group"],
		hostVars: 9,
		hostBindings: function MatExpButtonGroup_HostBindings(rf, ctx) {
			if (rf & 2) {
				ɵɵattribute("data-variant", ctx.variant())("data-selection", ctx.selection())("data-size", ctx.size())("data-shape", ctx.shape())("data-appearance", ctx.appearance())("data-disabled", ctx.disabled())("aria-disabled", ctx.disabled());
				ɵɵclassMap(ctx.matExpButtonGroupClass);
			}
		},
		inputs: {
			size: [1, "size"],
			shape: [1, "shape"],
			selection: [1, "selection"],
			variant: [1, "variant"],
			appearance: [1, "appearance"],
			disabled: [1, "disabled"],
			disableBounce: [1, "disableBounce"],
			value: "value"
		},
		outputs: {
			disabled: "disabledChange",
			selectionChange: "selectionChange"
		},
		features: [ɵɵProvidersFeature([MAT_EXP_BUTTON_GROUP_VALUE_ACCESSOR, {
			provide: MAT_EXP_BUTTON_GROUP,
			useExisting: MatExpButtonGroup
		}])],
		ngContentSelectors: _c0,
		decls: 1,
		vars: 0,
		template: function MatExpButtonGroup_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpButtonGroup, [{
		type: Component,
		args: [{
			selector: "mat-exp-button-group",
			providers: [MAT_EXP_BUTTON_GROUP_VALUE_ACCESSOR, {
				provide: MAT_EXP_BUTTON_GROUP,
				useExisting: MatExpButtonGroup
			}],
			changeDetection: ChangeDetectionStrategy.OnPush,
			host: {
				role: "group",
				"[class]": "matExpButtonGroupClass",
				"[attr.data-variant]": "variant()",
				"[attr.data-selection]": "selection()",
				"[attr.data-size]": "size()",
				"[attr.data-shape]": "shape()",
				"[attr.data-appearance]": "appearance()",
				"[attr.data-disabled]": "disabled()",
				"[attr.aria-disabled]": "disabled()"
			},
			template: "<ng-content></ng-content>\n"
		}]
	}], () => [], {
		size: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "size",
				required: false
			}]
		}],
		shape: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "shape",
				required: false
			}]
		}],
		selection: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "selection",
				required: false
			}]
		}],
		variant: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "variant",
				required: false
			}]
		}],
		appearance: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "appearance",
				required: false
			}]
		}],
		disabled: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "disabled",
				required: false
			}]
		}, {
			type: Output,
			args: ["disabledChange"]
		}],
		disableBounce: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "disableBounce",
				required: false
			}]
		}],
		selectionChange: [{
			type: Output,
			args: ["selectionChange"]
		}],
		value: [{ type: Input }],
		_matExpButtons: [{
			type: ContentChildren,
			args: [forwardRef(() => MatExpButton), { isSignal: true }]
		}],
		_matExpIconButtons: [{
			type: ContentChildren,
			args: [forwardRef(() => MatExpIconButton), { isSignal: true }]
		}]
	});
})();
/**
* Directive to style the Angular Material Button component with latest Material 3 Design System Expressive styles.
*/
var MatExpButton = class MatExpButton {
	_options = injectMatExpButtonOptions();
	/**
	* Host element of the button, used by `MatExpButtonGroup` to drive the
	* press-bounce width animation on its projected children.
	* @internal
	*/
	_hostElement = inject(ElementRef).nativeElement;
	/** @default 's' */
	size = model(this._options.size, ...ngDevMode ? [{ debugName: "size" }] : 	/* istanbul ignore next */ []);
	/** @default 'round' */
	shape = model(this._options.shape, ...ngDevMode ? [{ debugName: "shape" }] : 	/* istanbul ignore next */ []);
	/**
	* The toggle state of the button (`'selected' | 'unselected'`).
	*
	* Inside a `MatExpButtonGroup`, the group is the source of truth: it manages this model for
	* every projected button in response to clicks, keeping it in sync with the group's
	* single-/multi-select state.
	*
	* Standalone (outside a group), a click does **not** flip this value automatically — the
	* directive's click handler only delegates to a parent group when one is present. Toggling a
	* standalone button is consumer-driven: two-way bind `toggle` and flip it yourself in your own
	* `(click)` handler, e.g.
	* `[(toggle)]="state" (click)="state.set(state() === 'selected' ? 'unselected' : 'selected')"`.
	* This is an intentional, documented contract (see issue #188) — not a bug.
	*/
	toggle = model(this._options.toggle, ...ngDevMode ? [{ debugName: "toggle" }] : 	/* istanbul ignore next */ []);
	value = model(...ngDevMode ? [void 0, { debugName: "value" }] : 	/* istanbul ignore next */ []);
	/**
	* `aria-pressed`, derived from `toggle()`. `null` when the button does not
	* participate in toggle behavior, so the attribute is omitted entirely
	* rather than rendered as `aria-pressed="false"` (its mere presence changes
	* how assistive technology announces the control).
	* @internal
	*/
	ariaPressed = computed(() => {
		const toggle = this.toggle();
		return toggle === void 0 ? null : toggle === "selected" ? "true" : "false";
	}, ...ngDevMode ? [{ debugName: "ariaPressed" }] : 	/* istanbul ignore next */ []);
	/**
	* @internal
	*/
	matExpButtonClass = "mat-exp-button";
	/**
	* @internal
	*/
	state = input(this._options.state, ...ngDevMode ? [{ debugName: "state" }] : 	/* istanbul ignore next */ []);
	get appearance() {
		return this.matButton.appearance;
	}
	set appearance(appearance) {
		this.matButton.appearance = appearance;
	}
	get disabled() {
		return this.matButton.disabled;
	}
	set disabled(disabled) {
		this.matButton.disabled = disabled;
	}
	matButton = inject(MatButton);
	buttonGroup = inject(MatExpButtonGroup, { optional: true });
	_onButtonClick() {
		this.buttonGroup?._onButtonClick(this);
	}
	matMenu = inject(MatMenuTrigger, { optional: true });
	get isMenuOpen() {
		return this.matMenu?.menuOpen ?? false;
	}
	static ɵfac = function MatExpButton_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || MatExpButton)();
	};
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: MatExpButton,
		selectors: [[
			"",
			"matExpButton",
			""
		]],
		hostVars: 8,
		hostBindings: function MatExpButton_HostBindings(rf, ctx) {
			if (rf & 1) ɵɵlistener("click", function MatExpButton_click_HostBindingHandler() {
				return ctx._onButtonClick();
			});
			if (rf & 2) {
				ɵɵattribute("data-size", ctx.size())("data-shape", ctx.shape())("data-state", ctx.state())("data-toggle", ctx.toggle())("data-menu-open", ctx.isMenuOpen)("aria-pressed", ctx.ariaPressed());
				ɵɵclassMap(ctx.matExpButtonClass);
			}
		},
		inputs: {
			size: [1, "size"],
			shape: [1, "shape"],
			toggle: [1, "toggle"],
			value: [1, "value"],
			state: [1, "state"]
		},
		outputs: {
			size: "sizeChange",
			shape: "shapeChange",
			toggle: "toggleChange",
			value: "valueChange"
		},
		exportAs: ["matExpButton"]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpButton, [{
		type: Directive,
		args: [{
			selector: "[matExpButton]",
			host: {
				"[attr.data-size]": "size()",
				"[attr.data-shape]": "shape()",
				"[attr.data-state]": "state()",
				"[attr.data-toggle]": "toggle()",
				"[attr.data-menu-open]": "isMenuOpen",
				"[attr.aria-pressed]": "ariaPressed()",
				"[class]": "matExpButtonClass",
				"(click)": "_onButtonClick()"
			},
			exportAs: "matExpButton"
		}]
	}], null, {
		size: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "size",
				required: false
			}]
		}, {
			type: Output,
			args: ["sizeChange"]
		}],
		shape: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "shape",
				required: false
			}]
		}, {
			type: Output,
			args: ["shapeChange"]
		}],
		toggle: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "toggle",
				required: false
			}]
		}, {
			type: Output,
			args: ["toggleChange"]
		}],
		value: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "value",
				required: false
			}]
		}, {
			type: Output,
			args: ["valueChange"]
		}],
		state: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "state",
				required: false
			}]
		}]
	});
})();
/**
* @internal
*/
var MAT_EXP_SPLIT_BUTTON_DEFAULT_OPTIONS = {
	size: "s",
	appearance: "tonal"
};
var _splitButtonOptions = matExpCreateOptions(MAT_EXP_SPLIT_BUTTON_DEFAULT_OPTIONS);
var MAT_EXP_SPLIT_BUTTON_OPTIONS = _splitButtonOptions.token;
var provideMatExpSplitButtonOptions = _splitButtonOptions.provide;
var injectMatExpSplitButtonOptions = _splitButtonOptions.inject;
/**
* Component to style the Angular Material Button component with latest Material 3 Design System Expressive styles.
*/
var MatExpSplitButton = class MatExpSplitButton {
	_options = injectMatExpSplitButtonOptions();
	/** @default 's' */
	size = model(this._options.size, ...ngDevMode ? [{ debugName: "size" }] : 	/* istanbul ignore next */ []);
	/** @default 'tonal' */
	appearance = model(this._options.appearance, ...ngDevMode ? [{ debugName: "appearance" }] : 	/* istanbul ignore next */ []);
	/**
	* @internal
	*/
	matExpSplitButtonClass = "mat-exp-split-button";
	_matExpButtons = contentChildren(MatExpButton, ...ngDevMode ? [{ debugName: "_matExpButtons" }] : 	/* istanbul ignore next */ []);
	_matExpIconButtons = contentChildren(MatExpIconButton, ...ngDevMode ? [{ debugName: "_matExpIconButtons" }] : 	/* istanbul ignore next */ []);
	_allExpressiveButtons = computed(() => [...this._matExpButtons(), ...this._matExpIconButtons()], ...ngDevMode ? [{ debugName: "_allExpressiveButtons" }] : 	/* istanbul ignore next */ []);
	/**
	* `_allExpressiveButtons` adapted to the narrow `ButtonGroupChild` contract, used to
	* broadcast `size`/`appearance` without depending on the concrete button directive types.
	* @internal
	*/
	_allButtonGroupChildren = computed(() => this._allExpressiveButtons().map(toButtonGroupChild), ...ngDevMode ? [{ debugName: "_allButtonGroupChildren" }] : 	/* istanbul ignore next */ []);
	constructor() {
		bindButtonGroupChildren({
			children: this._allButtonGroupChildren,
			size: this.size,
			appearance: this.appearance
		});
	}
	static ɵfac = function MatExpSplitButton_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || MatExpSplitButton)();
	};
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: MatExpSplitButton,
		selectors: [["mat-exp-split-button"]],
		contentQueries: function MatExpSplitButton_ContentQueries(rf, ctx, dirIndex) {
			if (rf & 1) ɵɵcontentQuerySignal(dirIndex, ctx._matExpButtons, MatExpButton, 4)(dirIndex, ctx._matExpIconButtons, MatExpIconButton, 4);
			if (rf & 2) ɵɵqueryAdvance(2);
		},
		hostVars: 4,
		hostBindings: function MatExpSplitButton_HostBindings(rf, ctx) {
			if (rf & 2) {
				ɵɵattribute("data-size", ctx.size())("data-appearance", ctx.appearance());
				ɵɵclassMap(ctx.matExpSplitButtonClass);
			}
		},
		inputs: {
			size: [1, "size"],
			appearance: [1, "appearance"]
		},
		outputs: {
			size: "sizeChange",
			appearance: "appearanceChange"
		},
		ngContentSelectors: _c0,
		decls: 1,
		vars: 0,
		template: function MatExpSplitButton_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpSplitButton, [{
		type: Component,
		args: [{
			selector: "mat-exp-split-button",
			host: {
				"[attr.data-size]": "size()",
				"[attr.data-appearance]": "appearance()",
				"[class]": "matExpSplitButtonClass"
			},
			template: "<ng-content></ng-content>",
			changeDetection: ChangeDetectionStrategy.OnPush
		}]
	}], () => [], {
		size: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "size",
				required: false
			}]
		}, {
			type: Output,
			args: ["sizeChange"]
		}],
		appearance: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "appearance",
				required: false
			}]
		}, {
			type: Output,
			args: ["appearanceChange"]
		}],
		_matExpButtons: [{
			type: ContentChildren,
			args: [forwardRef(() => MatExpButton), { isSignal: true }]
		}],
		_matExpIconButtons: [{
			type: ContentChildren,
			args: [forwardRef(() => MatExpIconButton), { isSignal: true }]
		}]
	});
})();
var MatExpFabMenu = class MatExpFabMenu {
	/** @default 'primary' */
	color = input("primary", ...ngDevMode ? [{ debugName: "color" }] : 	/* istanbul ignore next */ []);
	/**
	* @internal
	*/
	matExpFabMenuClass = "mat-exp-fab-menu";
	matMenu = inject(MatMenu, { optional: true });
	/**
	* The consumer's original panel class, captured once before any mutation, so it can be
	* preserved every time `panelClass` is recomputed from scratch on `color()` changes.
	*
	* `MatMenu.panelClass` is a setter-only accessor — it always reads back as `undefined` — and
	* `MatMenu.classList`'s getter just re-reads `panelClass` internally, so it is equally
	* unreadable. The host element's native `class` attribute is read instead: Angular applies the
	* `class` input (aliased to `panelClass` on `mat-menu`) during the "update" pass, which runs
	* only after every directive on this node has finished constructing, so this field initializer
	* always sees the pristine, consumer-authored value before `MatMenu` clears the host element's
	* `className` as a side effect of its own `panelClass` setter.
	*/
	originalPanelClass = inject(ElementRef).nativeElement.getAttribute("class");
	constructor() {
		effect(() => {
			if (this.matMenu) this.matMenu.panelClass = [
				this.originalPanelClass,
				this.matExpFabMenuClass,
				`mat-exp-fab-menu-${this.color()}`
			].filter(Boolean).join(" ");
		});
	}
	static ɵfac = function MatExpFabMenu_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || MatExpFabMenu)();
	};
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: MatExpFabMenu,
		selectors: [[
			"",
			"matExpFabMenu",
			""
		]],
		inputs: { color: [1, "color"] }
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpFabMenu, [{
		type: Directive,
		args: [{ selector: "[matExpFabMenu]" }]
	}], () => [], { color: [{
		type: Input,
		args: [{
			isSignal: true,
			alias: "color",
			required: false
		}]
	}] });
})();
/**
* Builds a `Signal<boolean>` that reactively tracks whether the given `MatMenuTrigger`'s menu
* is currently open, fed by its `menuOpened`/`menuClosed` outputs.
*
* This is the single implementation shared by every button-family directive that renders a
* `data-menu-open` host attribute (`MatExpButton`, `MatExpIconButton`,
* `MatExpFabMenuTrigger`), replacing a plain `get isMenuOpen()` getter that happened to
* work only because Angular Material's own state changes triggered change detection.
*
* Must be called within an injection context (e.g. a field initializer or the constructor of a
* directive/component). Returns a signal that is always `false` when `matMenuTrigger` is
* `null`/`undefined` (no menu attached to this host).
*/
function injectIsMenuOpenSignal(matMenuTrigger) {
	if (!matMenuTrigger) return signal(false);
	return toSignal(merge(matMenuTrigger.menuOpened.pipe(map(() => true)), matMenuTrigger.menuClosed.pipe(map(() => false))), { initialValue: matMenuTrigger.menuOpen });
}
var MatExpFabMenuTrigger = class MatExpFabMenuTrigger {
	/**
	* @internal
	*/
	matExpFabMenuTriggerClass = "mat-exp-fab-menu-trigger";
	/** @default 'primary' */
	color = input("primary", ...ngDevMode ? [{ debugName: "color" }] : 	/* istanbul ignore next */ []);
	matMenuTrigger = inject(MatMenuTrigger);
	/**
	* @internal
	*/
	isMenuOpen = injectIsMenuOpenSignal(this.matMenuTrigger);
	static ɵfac = function MatExpFabMenuTrigger_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || MatExpFabMenuTrigger)();
	};
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: MatExpFabMenuTrigger,
		selectors: [[
			"",
			"matExpFabMenuTrigger",
			""
		]],
		hostVars: 4,
		hostBindings: function MatExpFabMenuTrigger_HostBindings(rf, ctx) {
			if (rf & 2) {
				ɵɵattribute("data-menu-open", ctx.isMenuOpen())("data-color", ctx.color());
				ɵɵclassMap(ctx.matExpFabMenuTriggerClass);
			}
		},
		inputs: { color: [1, "color"] }
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpFabMenuTrigger, [{
		type: Directive,
		args: [{
			selector: "[matExpFabMenuTrigger]",
			host: {
				"[attr.data-menu-open]": "isMenuOpen()",
				"[class]": "matExpFabMenuTriggerClass",
				"[attr.data-color]": "color()"
			}
		}]
	}], null, { color: [{
		type: Input,
		args: [{
			isSignal: true,
			alias: "color",
			required: false
		}]
	}] });
})();
var gsapPluginsRegistered = false;
function registerGsapPluginsOnce() {
	if (gsapPluginsRegistered) return;
	gsapWithCSS.registerPlugin(MorphSVGPlugin, CustomEase);
	gsapPluginsRegistered = true;
}
/**
* M3 Expressive spatial spring tokens. Each speed preset maps to one cubic
* bezier (registered with GSAP as a `CustomEase`), a spring duration (how
* long the per-step spring tween runs) and an interval (how long the entire
* step takes including the pause that follows the spring). The defaults
* mirror the Material 3 reference implementation in Jetpack Compose
* (`spring(dampingRatio = 0.6f, stiffness = 200f)` + `MorphIntervalMillis = 650`).
*/
var EXPRESSIVE_SPATIAL_SPRINGS = {
	fast: {
		ease: "mat-exp-fast-spatial",
		bezier: "0.42, 1.67, 0.21, 0.90",
		durationMs: 350,
		intervalMs: 500
	},
	default: {
		ease: "mat-exp-default-spatial",
		bezier: "0.38, 1.21, 0.22, 1.00",
		durationMs: 500,
		intervalMs: 650
	},
	slow: {
		ease: "mat-exp-slow-spatial",
		bezier: "0.39, 1.29, 0.35, 0.98",
		durationMs: 650,
		intervalMs: 845
	}
};
var expressiveEasesRegistered = false;
function registerExpressiveEasesOnce() {
	if (expressiveEasesRegistered) return;
	for (const { ease, bezier } of Object.values(EXPRESSIVE_SPATIAL_SPRINGS)) CustomEase.create(ease, bezier);
	expressiveEasesRegistered = true;
}
var ENTRY_DURATION_MS = 200;
var ENTRY_EASE = "power2.out";
var EXIT_DURATION_MS = 150;
var EXIT_EASE = "power2.in";
var ENTRY_SCALE_FROM = .85;
/**
* Animates the indicator container in (fade + scale). Calls `onComplete` when
* the tween finishes so Angular can mark the enter animation as done.
* Short-circuits to an instant show when `prefers-reduced-motion: reduce` is
* active.
*/
function animateEnter(container, onComplete) {
	if (prefersReducedMotion()) {
		gsapWithCSS.set(container, {
			autoAlpha: 1,
			scale: 1
		});
		onComplete();
		return;
	}
	gsapWithCSS.fromTo(container, {
		autoAlpha: 0,
		scale: ENTRY_SCALE_FROM,
		transformOrigin: "50% 50%"
	}, {
		autoAlpha: 1,
		scale: 1,
		duration: ENTRY_DURATION_MS / 1e3,
		ease: ENTRY_EASE,
		onComplete
	});
}
/**
* Animates the indicator container out (fade + scale). Calls `onComplete` when
* the tween finishes so Angular can detach the element from the DOM.
* Short-circuits to an instant hide when `prefers-reduced-motion: reduce` is
* active.
*/
function animateLeave(container, onComplete) {
	if (prefersReducedMotion()) {
		onComplete();
		return;
	}
	gsapWithCSS.to(container, {
		autoAlpha: 0,
		scale: ENTRY_SCALE_FROM,
		transformOrigin: "50% 50%",
		duration: EXIT_DURATION_MS / 1e3,
		ease: EXIT_EASE,
		onComplete
	});
}
/**
* Per-morph rotation kick. Mirrors `QuarterRotation = FullRotation / 4f` in
* the Compose reference; combined with the spring overshoot, this is what
* produces the "bounce" visible at each shape transition.
*/
var ROTATION_KICK_PER_STEP_DEG = 90;
/**
* Builds the continuous rotation + shape-morph timelines and returns the
* `gsap.MatchMedia` context so the caller can `revert()` it on cleanup.
*
* Two separate `<g>` elements are rotated so the morphing `<path>` never
* carries a rotation transform simultaneously (which caused `svgOrigin`-based
* transform-origin to drift as the path bounding box changed on each morph).
*
* - `rotator`       – receives the slow linear background rotation.
* - `springRotator` – receives the per-step spring kick (90° each step).
* - `path`          – receives only `morphSVG` changes.
*
* Both `<g>` elements must have `transform-box: view-box` in CSS so that
* GSAP's `transformOrigin: '50% 50%'` always resolves to the SVG viewport
* centre, independent of the child path's bounding box.
*/
function setupRotationAndMorph(rotator, springRotator, path, speed, shapes) {
	const spring = EXPRESSIVE_SPATIAL_SPRINGS[speed];
	const morphDurationMs = spring.durationMs;
	const morphIntervalMs = spring.intervalMs;
	const rotationDurationMs = morphIntervalMs * (4666 / 650);
	const pauseMs = Math.max(0, morphIntervalMs - morphDurationMs);
	const mm = gsapWithCSS.matchMedia();
	mm.add({
		motionOk: "(prefers-reduced-motion: no-preference)",
		reduceMotion: "(prefers-reduced-motion: reduce)"
	}, (context) => {
		const reduceMotion = !!context.conditions?.["reduceMotion"];
		gsapWithCSS.set(rotator, {
			transformOrigin: "50% 50%",
			rotation: 0
		});
		gsapWithCSS.set(springRotator, {
			transformOrigin: "50% 50%",
			rotation: 0
		});
		gsapWithCSS.set(path, { attr: { d: shapes[0] } });
		if (reduceMotion) return;
		gsapWithCSS.to(rotator, {
			rotation: 360,
			duration: rotationDurationMs / 1e3,
			ease: "none",
			repeat: -1,
			transformOrigin: "50% 50%"
		});
		let absoluteRotation = 0;
		let stepIndex = 0;
		const playStep = () => {
			context.add(() => {
				stepIndex = (stepIndex + 1) % shapes.length;
				absoluteRotation += ROTATION_KICK_PER_STEP_DEG;
				gsapWithCSS.to(springRotator, {
					rotation: absoluteRotation,
					duration: morphDurationMs / 1e3,
					ease: spring.ease,
					transformOrigin: "50% 50%"
				});
				gsapWithCSS.to(path, {
					morphSVG: shapes[stepIndex],
					duration: morphDurationMs / 1e3,
					ease: spring.ease,
					onComplete: () => {
						context.add(() => {
							if (pauseMs > 0) gsapWithCSS.delayedCall(pauseMs / 1e3, playStep);
							else playStep();
						});
					}
				});
			});
		};
		playStep();
	});
	return mm;
}
function prefersReducedMotion() {
	return typeof window !== "undefined" && typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
/**
* @internal
*/
var MAT_EXP_LOADING_INDICATOR_DEFAULT_OPTIONS = {
	config: "default",
	ariaLabel: "Loading",
	speed: "default"
};
var _loadingIndicatorOptions = matExpCreateOptions(MAT_EXP_LOADING_INDICATOR_DEFAULT_OPTIONS);
var MAT_EXP_LOADING_INDICATOR_OPTIONS = _loadingIndicatorOptions.token;
var provideMatExpLoadingIndicatorOptions = _loadingIndicatorOptions.provide;
var injectMatExpLoadingIndicatorOptions = _loadingIndicatorOptions.inject;
/**
* Ordered set of SVG path `d` strings used by the M3 Expressive loading
* indicator. Each shape is drawn inside the same `0 0 380 380` viewBox and is
* roughly centered on (190, 190) so they can be morphed and rotated about
* their common center.
*
* The exact set and order mirrors the SVG assets shipped at
* `src/assets/shapes` – see `loading-indicator.ts`.
*
* @internal
*/
var MAT_EXP_LOADING_INDICATOR_VIEW_BOX = "0 0 380 380";
/**
* @internal
*/
var MAT_EXP_LOADING_INDICATOR_SHAPES = Object.freeze([
	"M175.147 33.1508C181.983 22.2831 198.017 22.2831 204.853 33.1508L221.238 59.2009C225.731 66.3458 234.797 69.2506 242.692 66.0751L271.475 54.4972C283.482 49.6671 296.455 58.9613 295.507 71.7154L293.235 102.288C292.612 110.673 298.215 118.278 306.494 120.284L336.681 127.601C349.275 130.653 354.23 145.692 345.861 155.461L325.8 178.877C320.298 185.3 320.298 194.7 325.8 201.123L345.861 224.539C354.23 234.308 349.275 249.347 336.681 252.399L306.494 259.716C298.215 261.722 292.612 269.327 293.235 277.712L295.507 308.285C296.455 321.039 283.482 330.333 271.475 325.503L242.692 313.925C234.797 310.749 225.731 313.654 221.238 320.799L204.853 346.849C198.017 357.717 181.983 357.717 175.147 346.849L158.762 320.799C154.269 313.654 145.203 310.749 137.308 313.925L108.525 325.503C96.5177 330.333 83.5454 321.039 84.4931 308.285L86.7649 277.712C87.388 269.327 81.785 261.722 73.5056 259.716L43.3186 252.399C30.7252 249.347 25.7702 234.308 34.1391 224.539L54.1997 201.123C59.7018 194.7 59.7018 185.3 54.1997 178.877L34.1391 155.461C25.7702 145.692 30.7252 130.653 43.3186 127.601L73.5056 120.284C81.785 118.278 87.388 110.673 86.7649 102.288L84.4931 71.7154C83.5454 58.9613 96.5177 49.6671 108.525 54.4972L137.308 66.0751C145.203 69.2506 154.269 66.3458 158.762 59.201L175.147 33.1508Z",
	"M166.697 39.8458C167.238 39.3157 167.508 39.0506 167.743 38.8298C180.246 27.0567 199.754 27.0567 212.257 38.8298C212.492 39.0506 212.762 39.3157 213.303 39.8458C213.628 40.1639 213.79 40.323 213.945 40.4703C221.945 48.1056 233.282 51.1433 244.028 48.5311C244.235 48.4807 244.456 48.4242 244.896 48.311C245.63 48.1224 245.996 48.0282 246.31 47.9542C263.024 44.0098 279.919 53.7642 284.86 70.2114C284.953 70.5199 285.055 70.8847 285.258 71.6143C285.38 72.0522 285.442 72.2711 285.502 72.4758C288.613 83.0884 296.912 91.3875 307.524 94.4985C307.729 94.5585 307.948 94.6195 308.386 94.7417C309.115 94.9452 309.48 95.0469 309.789 95.1396C326.236 100.081 335.99 116.976 332.046 133.69C331.972 134.004 331.878 134.371 331.689 135.104C331.576 135.544 331.519 135.765 331.469 135.972C328.857 146.718 331.894 158.055 339.53 166.055C339.677 166.21 339.836 166.372 340.154 166.697C340.684 167.238 340.949 167.508 341.17 167.743C352.943 180.246 352.943 199.754 341.17 212.257C340.949 212.492 340.684 212.762 340.154 213.303C339.836 213.628 339.677 213.79 339.53 213.945C331.894 221.945 328.857 233.282 331.469 244.028C331.519 244.235 331.576 244.456 331.689 244.896C331.878 245.629 331.972 245.996 332.046 246.31C335.99 263.024 326.236 279.919 309.789 284.86C309.48 284.953 309.115 285.055 308.386 285.258C307.948 285.381 307.729 285.442 307.524 285.502C296.912 288.613 288.613 296.912 285.502 307.524C285.442 307.729 285.381 307.948 285.258 308.386C285.055 309.115 284.953 309.48 284.86 309.789C279.919 326.236 263.024 335.99 246.31 332.046C245.996 331.972 245.629 331.878 244.896 331.689C244.456 331.576 244.235 331.519 244.028 331.469C233.282 328.857 221.945 331.894 213.945 339.53C213.79 339.677 213.628 339.836 213.303 340.154C212.762 340.684 212.492 340.949 212.257 341.17C199.754 352.943 180.246 352.943 167.743 341.17C167.508 340.949 167.238 340.684 166.697 340.154C166.372 339.836 166.21 339.677 166.055 339.53C158.055 331.894 146.718 328.857 135.972 331.469C135.765 331.519 135.544 331.576 135.104 331.689C134.371 331.878 134.004 331.972 133.69 332.046C116.976 335.99 100.081 326.236 95.1396 309.789C95.0469 309.48 94.9452 309.115 94.7417 308.386C94.6195 307.948 94.5585 307.729 94.4985 307.524C91.3875 296.912 83.0884 288.613 72.4758 285.502C72.2711 285.442 72.0522 285.38 71.6143 285.258C70.8847 285.055 70.5199 284.953 70.2114 284.86C53.7642 279.919 44.0098 263.024 47.9542 246.31C48.0282 245.996 48.1224 245.63 48.311 244.896C48.4242 244.456 48.4807 244.235 48.5311 244.028C51.1433 233.282 48.1056 221.945 40.4703 213.945C40.323 213.79 40.1639 213.628 39.8458 213.303C39.3157 212.762 39.0506 212.492 38.8298 212.257C27.0567 199.754 27.0567 180.246 38.8298 167.743C39.0506 167.508 39.3157 167.238 39.8458 166.697C40.1639 166.372 40.323 166.21 40.4703 166.055C48.1056 158.055 51.1433 146.718 48.5311 135.972C48.4807 135.765 48.4242 135.544 48.311 135.104C48.1224 134.371 48.0282 134.004 47.9542 133.69C44.0098 116.976 53.7642 100.081 70.2114 95.1396C70.5199 95.0469 70.8847 94.9452 71.6143 94.7417C72.0522 94.6195 72.2711 94.5585 72.4758 94.4985C83.0884 91.3875 91.3875 83.0884 94.4985 72.4758C94.5585 72.2711 94.6195 72.0522 94.7417 71.6143C94.9452 70.8847 95.0469 70.5199 95.1396 70.2114C100.081 53.7642 116.976 44.0098 133.69 47.9542C134.004 48.0282 134.371 48.1224 135.104 48.311C135.544 48.4242 135.765 48.4807 135.972 48.5311C146.718 51.1433 158.055 48.1056 166.055 40.4703C166.21 40.323 166.372 40.1639 166.697 39.8458Z",
	"M155.064 49.459C176.093 34.1803 204.569 34.1803 225.598 49.459L322.926 120.171C343.955 135.45 352.754 162.532 344.722 187.253L307.546 301.668C299.514 326.39 276.476 343.127 250.483 343.127H130.18C104.186 343.127 81.1489 326.39 73.1164 301.668L35.9407 187.253C27.9082 162.532 36.7077 135.45 57.737 120.171L155.064 49.459Z",
	"M116.116 71.7851C169.162 18.7383 255.168 18.7383 308.215 71.7851C361.262 124.832 361.262 210.838 308.215 263.884L263.884 308.215C210.838 361.262 124.832 361.262 71.7851 308.215C18.7383 255.168 18.7383 169.162 71.7851 116.116L116.116 71.7851Z",
	"M276.453 68.8118C286.405 69.4881 291.381 69.8263 295.404 71.5853C301.223 74.1305 305.87 78.7766 308.415 84.5965C310.174 88.6186 310.512 93.5948 311.188 103.547L312.732 126.259C313.005 130.284 313.142 132.296 313.579 134.219C314.212 136.997 315.31 139.648 316.827 142.059C317.877 143.728 319.203 145.248 321.856 148.288L336.824 165.438C343.384 172.954 346.663 176.712 348.263 180.8C350.579 186.715 350.579 193.285 348.263 199.2C346.663 203.288 343.384 207.046 336.824 214.562L321.856 231.712C319.203 234.752 317.877 236.272 316.827 237.941C315.31 240.352 314.212 243.003 313.579 245.781C313.142 247.704 313.005 249.716 312.732 253.741L311.188 276.453C310.512 286.405 310.174 291.381 308.415 295.404C305.87 301.223 301.223 305.87 295.404 308.415C291.381 310.174 286.405 310.512 276.453 311.188L253.741 312.732C249.716 313.005 247.704 313.142 245.781 313.579C243.003 314.212 240.352 315.31 237.941 316.827C236.272 317.877 234.752 319.203 231.712 321.856L214.562 336.824C207.046 343.384 203.288 346.663 199.2 348.263C193.285 350.579 186.715 350.579 180.8 348.263C176.712 346.663 172.954 343.384 165.438 336.824L148.288 321.856C145.248 319.203 143.728 317.877 142.059 316.827C139.648 315.31 136.997 314.212 134.219 313.579C132.296 313.142 130.284 313.005 126.259 312.732L103.547 311.188C93.5947 310.512 88.6186 310.174 84.5965 308.415C78.7766 305.87 74.1305 301.223 71.5853 295.404C69.8263 291.381 69.4881 286.405 68.8118 276.453L67.2684 253.741C66.9949 249.716 66.8581 247.704 66.4206 245.781C65.7883 243.003 64.6903 240.352 63.173 237.941C62.123 236.272 60.7965 234.752 58.1437 231.712L43.1756 214.562C36.6164 207.046 33.3369 203.288 31.7366 199.2C29.4211 193.285 29.4211 186.715 31.7366 180.8C33.3369 176.712 36.6164 172.954 43.1756 165.438L58.1437 148.288C60.7965 145.248 62.123 143.728 63.173 142.059C64.6903 139.648 65.7883 136.997 66.4206 134.219C66.8581 132.296 66.9949 130.284 67.2684 126.259L68.8118 103.547C69.4881 93.5948 69.8263 88.6186 71.5853 84.5965C74.1305 78.7766 78.7766 74.1305 84.5965 71.5853C88.6186 69.8263 93.5948 69.4881 103.547 68.8118L126.259 67.2684C130.284 66.9949 132.296 66.8581 134.219 66.4206C136.997 65.7883 139.648 64.6903 142.059 63.173C143.728 62.123 145.248 60.7966 148.288 58.1437L165.438 43.1756C172.954 36.6164 176.712 33.3369 180.8 31.7366C186.715 29.4211 193.285 29.4211 199.2 31.7366C203.288 33.3369 207.046 36.6164 214.562 43.1756L231.712 58.1437C234.752 60.7966 236.272 62.123 237.941 63.173C240.352 64.6903 243.003 65.7883 245.781 66.4206C247.704 66.8581 249.716 66.9949 253.741 67.2684L276.453 68.8118Z",
	"M230.389 50.473C293.109 23.2328 356.767 86.8908 329.527 149.611L325.023 159.981C316.707 179.13 316.707 200.87 325.023 220.019L329.527 230.389C356.767 293.109 293.109 356.767 230.389 329.527L220.019 325.023C200.87 316.707 179.13 316.707 159.981 325.023L149.611 329.527C86.8908 356.767 23.2328 293.109 50.473 230.389L54.9768 220.019C63.2934 200.87 63.2934 179.13 54.9768 159.981L50.473 149.611C23.2328 86.8908 86.8908 23.2328 149.611 50.473L159.981 54.9768C179.13 63.2934 200.87 63.2934 220.019 54.9768L230.389 50.473Z",
	"M271.309 271.309C201.705 340.913 108.877 360.935 63.9707 316.029C19.0648 271.123 39.0867 178.295 108.691 108.691C178.295 39.0867 271.123 19.0648 316.029 63.9707C360.935 108.877 340.913 201.705 271.309 271.309Z"
]);
/**
* Material 3 Expressive loading indicator. Renders a continuously morphing and
* rotating shape that loops through the seven canonical M3 shapes.
*
* All animation work is driven by GSAP – there are no CSS keyframes:
*
* - **Entry** – Angular's `(animate.enter)` event binding hands control to
*   GSAP, which fades the wrapper from `autoAlpha: 0 / scale: 0.85 → 1` over
*   ~200ms (`power2.out`) and calls `event.animationComplete()` once the
*   tween finishes.
* - **Exit** – `(animate.leave)` runs the inverse tween over ~150ms
*   (`power2.in`); Angular waits for `animationComplete()` before detaching
*   the element from the DOM.
* - **Rotation & shape morph** – modelled on the Compose Material3
*   `LoadingIndicator` choreography:
*   - a continuous **linear background rotation** on a wrapper `<g>`
*     (`intervalMs × ~7.178` per full revolution, matching Compose's ratio),
*   - on top of it, a **per-step spring** that morphs the inner `<path>` to
*     the next shape **and** kicks its rotation by 90°, eased through one of
*     the M3 Expressive spatial spring cubic-bezier presets. The spring's
*     overshoot is what produces the visible bounce at each morph boundary.
*
* Motion tokens live in `loading-indicator.animation.ts` – the SCSS only
* ships visual tokens (size, colour, ratio). Override motion globally via
* `provideMatExpLoadingIndicatorOptions` or per-instance via the
* `speed` input.
*
* `prefers-reduced-motion: reduce` is honoured on every layer: the entry /
* exit tweens short-circuit to `event.animationComplete()`, and the
* rotation / morph timelines are skipped via `gsap.matchMedia()`.
*
* @metaDescription Material 3 Expressive loading indicator with a GSAP-driven morphing, rotating shape animation.
*/
var MatExpLoadingIndicator = class MatExpLoadingIndicator {
	_options = injectMatExpLoadingIndicatorOptions();
	/**
	* Visual configuration of the indicator.
	*
	* - `default` – renders just the morphing shape.
	* - `contained` – renders the morphing shape on top of a tonal background
	*   "container" circle.
	*
	* @default 'default'
	*/
	config = input(this._options.config, ...ngDevMode ? [{ debugName: "config" }] : 	/* istanbul ignore next */ []);
	/**
	* Accessible label announced by screen readers while the indicator is shown.
	*
	* @default 'Loading'
	*/
	ariaLabel = input(this._options.ariaLabel, ...ngDevMode ? [{ debugName: "ariaLabel" }] : 	/* istanbul ignore next */ []);
	/**
	* Speed preset for the shape morph and rotation animation. Each preset maps
	* to one of the M3 Expressive spatial spring tokens (`fast`, `default`,
	* `slow`) – see {@linkcode MatExpLoadingIndicatorSpeed}.
	*
	* Changing this signal at runtime tears down the active GSAP timelines and
	* re-builds them with the new spring, so the indicator stays in sync with
	* the new motion language without recreating the component.
	*
	* @default 'default'
	*/
	speed = input(this._options.speed ?? "default", ...ngDevMode ? [{ debugName: "speed" }] : 	/* istanbul ignore next */ []);
	/** @internal */
	matExpLoadingIndicatorClass = "mat-exp-loading-indicator";
	/**
	* Ordered list of SVG path `d` strings used by the shape morph loop.
	* @internal
	*/
	shapes = MAT_EXP_LOADING_INDICATOR_SHAPES;
	/** @internal */
	viewBox = MAT_EXP_LOADING_INDICATOR_VIEW_BOX;
	containerRef = viewChild("container", ...ngDevMode ? [{ debugName: "containerRef" }] : 	/* istanbul ignore next */ []);
	rotatorRef = viewChild("rotator", ...ngDevMode ? [{ debugName: "rotatorRef" }] : 	/* istanbul ignore next */ []);
	springRotatorRef = viewChild("springRotator", ...ngDevMode ? [{ debugName: "springRotatorRef" }] : 	/* istanbul ignore next */ []);
	pathRef = viewChild("path", ...ngDevMode ? [{ debugName: "pathRef" }] : 	/* istanbul ignore next */ []);
	isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
	constructor() {
		if (!this.isBrowser) return;
		registerGsapPluginsOnce();
		registerExpressiveEasesOnce();
		afterRenderEffect((onCleanup) => {
			const speed = this.speed();
			const pathEl = this.pathRef()?.nativeElement;
			const rotatorEl = this.rotatorRef()?.nativeElement;
			const springRotatorEl = this.springRotatorRef()?.nativeElement;
			if (!pathEl || !rotatorEl || !springRotatorEl || !speed) return;
			const mm = setupRotationAndMorph(rotatorEl, springRotatorEl, pathEl, speed, this.shapes);
			onCleanup(() => mm.revert());
		});
	}
	/**
	* @internal
	* Bound via `host` to `(animate.enter)`.
	*/
	onEnter(event) {
		const container = this.containerRef()?.nativeElement;
		if (!this.isBrowser || !container) {
			event.animationComplete();
			return;
		}
		animateEnter(container, () => event.animationComplete());
	}
	/**
	* @internal
	* Bound via `host` to `(animate.leave)`.
	*/
	onLeave(event) {
		const container = this.containerRef()?.nativeElement;
		if (!this.isBrowser || !container) {
			event.animationComplete();
			return;
		}
		animateLeave(container, () => event.animationComplete());
	}
	static ɵfac = function MatExpLoadingIndicator_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || MatExpLoadingIndicator)();
	};
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: MatExpLoadingIndicator,
		selectors: [["mat-exp-loading-indicator"]],
		viewQuery: function MatExpLoadingIndicator_Query(rf, ctx) {
			if (rf & 1) ɵɵviewQuerySignal(ctx.containerRef, _c1, 5)(ctx.rotatorRef, _c2, 5)(ctx.springRotatorRef, _c3, 5)(ctx.pathRef, _c4, 5);
			if (rf & 2) ɵɵqueryAdvance(4);
		},
		hostAttrs: [
			"role",
			"progressbar",
			"aria-valuemin",
			"0",
			"aria-valuemax",
			"100",
			"aria-busy",
			"true"
		],
		hostVars: 4,
		hostBindings: function MatExpLoadingIndicator_HostBindings(rf, ctx) {
			if (rf & 1) {
				ɵɵanimateEnterListener(function MatExpLoadingIndicator_animateenter_HostBindingHandler($event) {
					return ctx.onEnter($event);
				});
				ɵɵanimateLeaveListener(function MatExpLoadingIndicator_animateleave_HostBindingHandler($event) {
					return ctx.onLeave($event);
				});
			}
			if (rf & 2) {
				ɵɵattribute("aria-label", ctx.ariaLabel())("data-speed", ctx.speed());
				ɵɵclassMap(ctx.matExpLoadingIndicatorClass);
			}
		},
		inputs: {
			config: [1, "config"],
			ariaLabel: [1, "ariaLabel"],
			speed: [1, "speed"]
		},
		decls: 9,
		vars: 4,
		consts: [
			["container", ""],
			["rotator", ""],
			["springRotator", ""],
			["path", ""],
			[1, "mat-exp-loading-indicator-container"],
			[
				"fill",
				"none",
				"xmlns",
				"http://www.w3.org/2000/svg",
				"focusable",
				"false",
				"aria-hidden",
				"true",
				1,
				"mat-exp-loading-indicator-svg"
			],
			[1, "mat-exp-loading-indicator-rotator"],
			[1, "mat-exp-loading-indicator-spring-rotator"],
			["fill", "currentColor"]
		],
		template: function MatExpLoadingIndicator_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵdomElementStart(0, "div", 4, 0);
				ɵɵnamespaceSVG();
				ɵɵdomElementStart(2, "svg", 5)(3, "g", 6, 1)(5, "g", 7, 2);
				ɵɵdomElement(7, "path", 8, 3);
				ɵɵdomElementEnd()()()();
			}
			if (rf & 2) {
				ɵɵclassProp("mat-exp-loading-indicator-container-contained", ctx.config() === "contained");
				ɵɵadvance(2);
				ɵɵattribute("viewBox", ctx.viewBox);
				ɵɵadvance(5);
				ɵɵattribute("d", ctx.shapes[0]);
			}
		},
		styles: [".mat-exp-loading-indicator{display:inline-flex;align-items:center;justify-content:center;width:var(--%NS%mat-exp-loading-indicator-size, 48px);height:var(--%NS%mat-exp-loading-indicator-size, 48px);min-width:var(--%NS%mat-exp-loading-indicator-min-size, 24px);min-height:var(--%NS%mat-exp-loading-indicator-min-size, 24px);max-width:var(--%NS%mat-exp-loading-indicator-max-size, 240px);max-height:var(--%NS%mat-exp-loading-indicator-max-size, 240px)}.mat-exp-loading-indicator-container{width:100%;height:100%;display:flex;align-items:center;justify-content:center;border-radius:50%;color:var(--%NS%mat-exp-loading-indicator-color, var(--%NS%mat-sys-on-primary-container));transform-origin:50% 50%;will-change:transform,opacity}.mat-exp-loading-indicator-container-contained{background-color:var(--%NS%mat-exp-loading-indicator-container-color, var(--%NS%mat-sys-primary-container))}.mat-exp-loading-indicator-svg{display:block;width:var(--%NS%mat-exp-loading-indicator-active-indicator-size, 79.16%);height:var(--%NS%mat-exp-loading-indicator-active-indicator-size, 79.16%);color:inherit;overflow:visible}.mat-exp-loading-indicator-rotator,.mat-exp-loading-indicator-spring-rotator{transform-box:view-box;transform-origin:50% 50%}\n"],
		encapsulation: 2
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpLoadingIndicator, [{
		type: Component,
		args: [{
			selector: "mat-exp-loading-indicator",
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			host: {
				role: "progressbar",
				"aria-valuemin": "0",
				"aria-valuemax": "100",
				"aria-busy": "true",
				"[attr.aria-label]": "ariaLabel()",
				"[attr.data-speed]": "speed()",
				"[class]": "matExpLoadingIndicatorClass",
				"(animate.enter)": "onEnter($event)",
				"(animate.leave)": "onLeave($event)"
			},
			template: "<div\n  #container\n  class=\"mat-exp-loading-indicator-container\"\n  [class.mat-exp-loading-indicator-container-contained]=\"config() === 'contained'\"\n>\n  <svg\n    class=\"mat-exp-loading-indicator-svg\"\n    [attr.viewBox]=\"viewBox\"\n    fill=\"none\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    focusable=\"false\"\n    aria-hidden=\"true\"\n  >\n    <g #rotator class=\"mat-exp-loading-indicator-rotator\">\n      <g #springRotator class=\"mat-exp-loading-indicator-spring-rotator\">\n        <path #path [attr.d]=\"shapes[0]\" fill=\"currentColor\"></path>\n      </g>\n    </g>\n  </svg>\n</div>\n",
			styles: [".mat-exp-loading-indicator{display:inline-flex;align-items:center;justify-content:center;width:var(--mat-exp-loading-indicator-size, 48px);height:var(--mat-exp-loading-indicator-size, 48px);min-width:var(--mat-exp-loading-indicator-min-size, 24px);min-height:var(--mat-exp-loading-indicator-min-size, 24px);max-width:var(--mat-exp-loading-indicator-max-size, 240px);max-height:var(--mat-exp-loading-indicator-max-size, 240px)}.mat-exp-loading-indicator-container{width:100%;height:100%;display:flex;align-items:center;justify-content:center;border-radius:50%;color:var(--mat-exp-loading-indicator-color, var(--mat-sys-on-primary-container));transform-origin:50% 50%;will-change:transform,opacity}.mat-exp-loading-indicator-container-contained{background-color:var(--mat-exp-loading-indicator-container-color, var(--mat-sys-primary-container))}.mat-exp-loading-indicator-svg{display:block;width:var(--mat-exp-loading-indicator-active-indicator-size, 79.16%);height:var(--mat-exp-loading-indicator-active-indicator-size, 79.16%);color:inherit;overflow:visible}.mat-exp-loading-indicator-rotator,.mat-exp-loading-indicator-spring-rotator{transform-box:view-box;transform-origin:50% 50%}\n"]
		}]
	}], () => [], {
		config: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "config",
				required: false
			}]
		}],
		ariaLabel: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "ariaLabel",
				required: false
			}]
		}],
		speed: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "speed",
				required: false
			}]
		}],
		containerRef: [{
			type: ViewChild,
			args: ["container", { isSignal: true }]
		}],
		rotatorRef: [{
			type: ViewChild,
			args: ["rotator", { isSignal: true }]
		}],
		springRotatorRef: [{
			type: ViewChild,
			args: ["springRotator", { isSignal: true }]
		}],
		pathRef: [{
			type: ViewChild,
			args: ["path", { isSignal: true }]
		}]
	});
})();
//#endregion
export { ButtonAdapter, IconButtonAdapter, MAT_EXP_BUTTON_DEFAULT_OPTIONS, MAT_EXP_BUTTON_GROUP, MAT_EXP_BUTTON_GROUP_DEFAULT_OPTIONS, MAT_EXP_BUTTON_GROUP_OPTIONS, MAT_EXP_BUTTON_GROUP_VALUE_ACCESSOR, MAT_EXP_BUTTON_OPTIONS, MAT_EXP_ICON_BUTTON_DEFAULT_OPTIONS, MAT_EXP_ICON_BUTTON_OPTIONS, MAT_EXP_LOADING_INDICATOR_DEFAULT_OPTIONS, MAT_EXP_LOADING_INDICATOR_OPTIONS, MAT_EXP_LOADING_INDICATOR_SHAPES, MAT_EXP_LOADING_INDICATOR_VIEW_BOX, MAT_EXP_SPLIT_BUTTON_DEFAULT_OPTIONS, MAT_EXP_SPLIT_BUTTON_OPTIONS, MatExpButton, MatExpButtonGroup, MatExpFabMenu, MatExpFabMenuTrigger, MatExpIconButton, MatExpLoadingIndicator, MatExpSelectableButtonChange, MatExpSplitButton, bindButtonGroupChildren, injectMatExpButtonGroupOptions, injectMatExpButtonOptions, injectMatExpIconButtonOptions, injectMatExpLoadingIndicatorOptions, injectMatExpSplitButtonOptions, provideMatExpButtonGroupOptions, provideMatExpButtonOptions, provideMatExpIconButtonOptions, provideMatExpLoadingIndicatorOptions, provideMatExpSplitButtonOptions, toButtonGroupChild };
