import { Button, buttonVariants, buttonSizes, Textarea } from "../lib";
import { CogIcon } from "lucide-react";
import { Checkbox } from "../lib";
import { Input } from "../lib";
import { Label } from "../lib";
import { Kbd } from "../lib";
import { CommandIcon } from "lucide-react";

const buttons = buttonVariants.flatMap((variant) => (
  <div key={variant} className="flex gap-2">
    {buttonSizes.map((size) => (
      <>
        {size === "default" && (
          <>
            <Button variant={variant}>
              <CogIcon />
              hello
            </Button>
            <Button variant={variant} disabled>
              <CogIcon />
              hello
            </Button>
          </>
        )}
        <Button variant={variant} size={size}>
          {size === "icon" ? <CogIcon /> : "hello"}
        </Button>
        <Button variant={variant} size={size} disabled>
          {size === "icon" ? <CogIcon /> : "hello"}
        </Button>
      </>
    ))}
  </div>
));

function App() {
  return (
    <div className="flex flex-col gap-4">
      {buttons}
      <Label>
        <Checkbox />
        hello
      </Label>
      <Label>
        <Checkbox disabled />
        hello
      </Label>
      <Input placeholder="hello" />
      <Input placeholder="hello" disabled />
      <Textarea placeholder="hello" />
      <Textarea placeholder="hello" disabled />
      <Kbd>
        <CommandIcon />
        <span>s</span>
      </Kbd>
    </div>
  );
}

export default App;
