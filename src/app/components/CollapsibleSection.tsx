import { useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import * as Collapsible from '@radix-ui/react-collapsible';

type CollapsibleSectionProps = {
  title: string;
  children: ReactNode;
};

export function CollapsibleSection({ title, children }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible.Root open={isOpen} onOpenChange={setIsOpen} className="mb-6">
      <Collapsible.Trigger
        type="button"
        className="w-full flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <span className="font-medium text-gray-900">{title}</span>
        <ChevronDown
          className={`text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          size={20}
        />
      </Collapsible.Trigger>
      <Collapsible.Content className="mt-4 px-4">{children}</Collapsible.Content>
    </Collapsible.Root>
  );
}
