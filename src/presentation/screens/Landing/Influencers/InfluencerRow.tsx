type Props = { children: React.ReactNode };

export function InfluencersRow({ children }: Props) {
  return (
    <div className="flex flex-col gap-y-4 justify-between">{children}</div>
  );
}