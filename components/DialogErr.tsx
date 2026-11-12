import { RefObject } from "react";

export function DialogErr({
  errDialogref,
  errCode,
}: {
  errDialogref: RefObject<HTMLDialogElement | null>;
  errCode: number;
}) {
  return (
    <dialog
      className=" m-auto p-3 open:flex flex-col gap-2 rounded-2xl border border-border bg-surface-muted"
      ref={errDialogref}
    >
      <p>
        {errCode === 1
          ? "Геолокация запрещена, разрешите ее в настройках"
          : errCode === 2
            ? "Местоположение временно недоступно"
            : "Истекло время ожидания. Попробуйте ещё раз"}
      </p>

      <button
        onClick={() => errDialogref.current?.close()}
        className="bg-primary hover:bg-primary-hover p-2 rounded-xl text-primary-foreground"
      >
        Понятно
      </button>
    </dialog>
  );
}
