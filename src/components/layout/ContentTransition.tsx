import {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion";

interface Props {
    children: JSX.Element;
}

export default function ContentTransition({children}: Props): JSX.Element {

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView)
            controls.start("visible").then();
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{duration: 0.25, delay: 0.15}}
            variants={{
                visible: {opacity: 1},
                hidden: {opacity: 0}
            }}
        >
            {children}
        </motion.div>
    );
}
