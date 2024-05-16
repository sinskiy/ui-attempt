import { Tab } from "./Tab";
import { cn } from "./utils";
import {
  ChangeEvent,
  HTMLAttributes,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import "./Tabs.css";

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  tabs: string[];
}

const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ className, tabs, name, ...props }) => {
    const tabsRef = useRef<HTMLDivElement>(null);

    useEffect(
      () =>
        tabsRef.current?.style.setProperty(
          "--width",
          `${tabsRef.current?.children[0].clientWidth}px`,
        ),
      [],
    );

    const [selected, setSelected] = useState(tabs[0]);

    function moveIndicator(e: ChangeEvent<HTMLInputElement>) {
      const newSelected = e.target;
      if (newSelected.checked) {
        const newSelectedID = newSelected.id;
        setSelected(newSelectedID);

        const { clientWidth, offsetLeft } =
          newSelected.parentElement as HTMLElement;

        tabsRef.current?.style.setProperty("--width", `${clientWidth}px`);
        tabsRef.current?.style.setProperty("--left", `${offsetLeft}px`);
      }
    }

    const tabsList = tabs.map((tab) => (
      <Tab
        id={tab}
        name={name}
        checked={selected === tab}
        onChange={moveIndicator}
      >
        {tab}
      </Tab>
    ));
    return (
      <div
        role="tablist"
        ref={tabsRef}
        className={cn(
          "indicator bg-surface-container flex rounded-full p-1",
          className,
        )}
        {...props}
      >
        {tabsList}
      </div>
    );
  },
);
Tabs.displayName = "Tabs";

export { Tabs };
