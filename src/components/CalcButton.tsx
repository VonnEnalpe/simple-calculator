import { Button } from '@chakra-ui/react';

export const CalcButton = ({ label, onClick }: { label: string; onClick?: () => void }) => {
  return (
    <Button
      onClick={onClick}
      children={label}
      size="lg"
      variant="solid"
      colorScheme={['+', '-', '×', '÷', '='].includes(label) ? 'blue' : 'gray'}
    />
  );
};
