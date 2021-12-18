import { useCallback, useEffect } from 'react';

interface UseIntersectionProps {
    target: HTMLCollectionOf<HTMLElement> | HTMLElement[] | undefined;
    options?: IntersectionObserverInit;
    disabledIsIntersectiong?: boolean;
}

export function useFadeAnimation({
    target,
    options = {},
}: UseIntersectionProps) {
    const intersection = useCallback(
        async (
            entries: IntersectionObserverEntry[],
            self: IntersectionObserver,
        ) => {
            entries.forEach((entry) => {
                const element = entry.target as HTMLElement;
                if (!entry.isIntersecting) {
                    element.style.opacity = '0';
                    element.style.transform = 'translateX(50%)';
                    element.style.transition = 'opacity 0.8s, transform 0.8s';
                    return;
                }
                element.style.opacity = '1';
                element.style.transform = 'translateX(0%)';

                self.unobserve(element);
            });
        },
        [target],
    );

    const io = new IntersectionObserver(intersection, options);

    useEffect(() => {
        if (!target) return undefined;
        if (target instanceof Element) {
            io.observe(target);
        } else {
            Array.from(target).map((element) => {
                io.observe(element);
            });
        }
        return () => io && io.disconnect();
    }, [
        target,
        options.root,
        options.threshold,
        options.rootMargin,
        intersection,
    ]);
}
