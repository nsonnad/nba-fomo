import { timeParse, timeFormat } from 'd3';

/**
 * Converts an ET time string to a local H:MM string.
 * @param etString - Format: "7:00 pm ET"
 * @returns string - Format: "H:MM" (Local)
 */
const localizeGameTime = (etString: string): string => {
  // 1. Define our formatters/parsers
  const parseTime = timeParse('%I:%M %p');
  const formatLocal = timeFormat('%-I:%M %p');

  // 2. Extract time and map to today's date for DST accuracy
  const parseToDate = (input: string): Date => {
    const cleanTime = input.replace(/ ET$/i, '');
    const parsed = parseTime(cleanTime);

    if (!parsed) throw new Error(`Invalid time format: ${input}`);

    const now = new Date();
    // Return a new Date instance combining today's date with the parsed time
    return new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      parsed.getHours(),
      parsed.getMinutes()
    );
  };

  // 3. Adjust for Eastern Time offset
  const adjustToLocal = (date: Date): Date => {
    // Get the exact time in ET regardless of where the user is
    const etString = date.toLocaleString('en-US', { timeZone: 'America/New_York' });
    const etDate = new Date(etString);

    // Calculate the difference between "Local System Time" and "ET Time"
    const offset = date.getTime() - etDate.getTime();

    // Create a new date adjusted by that offset
    return new Date(date.getTime() + offset);
  };

  // 4. Execute the pipeline
  const date = parseToDate(etString);
  const localDate = adjustToLocal(date);

  return formatLocal(localDate).toLowerCase();
};

export default localizeGameTime;
