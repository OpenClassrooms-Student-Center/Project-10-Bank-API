const browserLocale = navigator.language;

export const formatDate = ({
  date,
  locale = browserLocale,
  options,
}: {
  date: Date | string;
  locale?: Intl.LocalesArgument;
  options?: Intl.DateTimeFormatOptions;
}): string => new Date(date).toLocaleDateString(locale, options);
