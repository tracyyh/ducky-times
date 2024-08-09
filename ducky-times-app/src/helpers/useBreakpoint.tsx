import { useEffect, useState } from "react";

export enum BREAKPOINT {
    MOBILE = 600,
    MIDSIZE = 1000,
    DESKTOP = 1200,
}

export default function useBreakpoint() {
	const [breakpoint, setBreakpoint] = useState<BREAKPOINT | null>(null);

	const validateBreakpoint = () => {
		if (window.matchMedia(`(max-width: ${BREAKPOINT.MOBILE}px)`).matches) {
			setBreakpoint(BREAKPOINT.MOBILE);
			return breakpoint;
		}
		if (window.matchMedia(`(max-width: ${BREAKPOINT.MIDSIZE}px)`).matches) {
			setBreakpoint(BREAKPOINT.MIDSIZE);
			return breakpoint;
		} else setBreakpoint(BREAKPOINT.DESKTOP);
	};

	useEffect(() => {
		validateBreakpoint();
		window.addEventListener("resize", validateBreakpoint);
		return () => {
			window.removeEventListener("resize", validateBreakpoint);
		};
	});

	return breakpoint;
}
