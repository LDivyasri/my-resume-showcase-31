import { useState } from "react";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ResumeViewerProps {
  variant?: "default" | "ghost" | "outline" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  fullWidth?: boolean;
}

const ResumeViewer = ({ variant = "default", size = "sm", className = "", fullWidth = false }: ResumeViewerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant={variant}
        size={size}
        className={`${className} ${fullWidth ? 'w-full' : ''}`}
        onClick={() => setIsOpen(true)}
      >
        <FileText className="mr-2 h-4 w-4" />
        Resume
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl h-[90vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Resume</DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-hidden">
            <object
              data="/resume.pdf"
              type="application/pdf"
              className="w-full h-full rounded-md"
              aria-label="Resume PDF"
            >
              <embed
                src="/resume.pdf"
                type="application/pdf"
                className="w-full h-full rounded-md"
              />
            </object>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ResumeViewer;
