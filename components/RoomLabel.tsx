export default function RoomLabel({ room, name }: { room: string; name: string }) {
  return (
    <div className="mb-10">
      <div data-threshold className="h-px w-full origin-left bg-ink" />
      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.35em] text-ink/60">
        Room {room} · {name}
      </p>
    </div>
  );
}
