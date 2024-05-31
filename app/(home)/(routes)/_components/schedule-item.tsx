import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface ScheduleItemProps {
  day: {
    dayOfWeek: string;
    sessions: {
      name: string;
      trainer: string;
      time: string;
    }[];
  };
}

export const ScheduleItem = ({ day }: ScheduleItemProps) => {
  return (
    <Accordion
      type='single'
      collapsible
      className='bg-card text-card-foreground'
      key={day.dayOfWeek}
    >
      <AccordionItem value={`item-${day.dayOfWeek}`}>
        <AccordionTrigger className='p-4'>{day.dayOfWeek}</AccordionTrigger>
        <AccordionContent className='p-4 pb-6 space-y-6'>
          {day.sessions.map((session, _) => {
            return (
              <div
                className='border-l-2 rounded-lg border-[#e08639] pl-2'
                key={session.name}
              >
                <p className='text-base font-semibold'>{session.name}</p>
                <p className='text-sm font-normal'>{session.trainer}</p>
                <p className='text-base font-semibold'>{session.time}</p>
              </div>
            );
          })}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
