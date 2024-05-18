import { Tab } from "./Tab";
import { cn } from "./utils";
import {
  ChangeEvent,
  MouseEvent,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import "./Tabs.css";

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  tabs: string[];
}

export function Tabs({ className, tabs, name, ...props }: TabsProps) {
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    selectFirstTab(tabs);

    if (selected) {
      setTabWidth(selected.clientWidth);
    }
  }, []);

  const [selected, setSelected] = useState<HTMLInputElement | null>(null);

  function moveIndicator(e: ChangeEvent<HTMLInputElement>) {
    const newSelected = e.currentTarget;
    if (newSelected.checked) {
      setSelected(newSelected);

      setTabWidth(newSelected.clientWidth);
      setTabLeft(newSelected.parentElement!.offsetLeft);
    }
  }

  function tabHoverHandle(
    e: MouseEvent<HTMLInputElement>,
    type: "enter" | "leave",
  ) {
    const { clientWidth, id } = e.currentTarget;

    const selectedElementHovered = id === selected?.id;

    if (!clientWidth || selectedElementHovered) return;

    setTabWidth(type === "enter" ? clientWidth + 20 : clientWidth);

    if (selected?.parentElement && firstTabComesBefore(id, selected.id)) {
      const { offsetLeft } = selected.parentElement;
      setTabLeft(type === "enter" ? offsetLeft - 20 : offsetLeft);
    }
  }

  function selectFirstTab(tabs: string[]) {
    const firstTabElement = document.getElementById(
      tabs[0],
    ) as HTMLInputElement;

    if (firstTabElement) {
      setSelected(firstTabElement);
    }
  }

  function firstTabComesBefore(firstID: string, secondID: string) {
    return tabs.indexOf(firstID) < tabs.indexOf(secondID);
  }

  function setTabWidth(width: number) {
    setTabProperty("width", `${width}px`);
  }

  function setTabLeft(offsetLeft: number) {
    setTabProperty("left", `${offsetLeft}px`);
  }

  function setTabProperty(property: string, propertyValue: string) {
    tabsRef.current?.style.setProperty(`--${property}`, propertyValue);
  }

  const tabsList = tabs.map((tab) => (
    <Tab
      key={tab}
      id={tab}
      name={name}
      checked={selected?.id === tab}
      onChange={moveIndicator}
      onMouseEnter={(e) => tabHoverHandle(e, "enter")}
      onMouseLeave={(e) => tabHoverHandle(e, "leave")}
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
}
