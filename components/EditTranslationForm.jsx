"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTranslationForm ({ id, path, assignee, created_by, approved_dt, approved_kj, approved_kp, approved_ur, payment }) {
    const [newPath, setNewPath] = useState(path);
    const [newAssignee, setNewAssignee] = useState(assignee);
    const [newDT, setNewDT] = useState(approved_dt);
    const [newKJ, setNewKJ] = useState(approved_kj);
    const [newKP, setNewKP] = useState(approved_kp);
    const [newUR, setNewUR] = useState(approved_ur);
    const [newPayment, setNewPayment] = useState(payment);
    const [newModifiedBy, setNewModifiedBy] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/translations/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ newPath, newAssignee, newDT, newKJ, newKP, newUR, newPayment, newModifiedBy }),
            });
            if (!res.ok) {
                throw new Error("Failed to update topic");
            }

            router.push("/");
            router.reload();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-3 mx-auto">
            <div className=" grid grid-cols-2 my-2">
                <label>
                    Nazwa Pliku:
                </label>
                <input
                    required
                    onChange={(e) => setNewPath(e.target.value)}
                    value={newPath}
                    className="border border-slate-500 px-8 py-2"
                    type="text"
                />
            </div>
            <div className=" grid grid-cols-2 my-2">
                <label>
                    Nazwa Użytkownika:
                </label>
                <input
                    required
                    onChange={(e) => setNewModifiedBy(e.target.value)}
                    value={newModifiedBy}
                    className="border border-slate-500 px-8 py-2"
                    type="text"
                />
            </div>
            <div className=" grid grid-cols-2 my-2">
                <label>
                    Osoba Przydzielona:
                </label>
                <input
                    required
                    onChange={(e) => setNewAssignee(e.target.value)}
                    value={newAssignee}
                    className="border border-slate-500 px-8 py-2"
                    type="text"
                />
            </div>
            <div className=" grid grid-cols-2 my-2">
                <label>
                    Zatwierdzono przez DT:
                </label>
                <input
                    onChange={(e) => {
                        setNewDT(e.target.checked.toString())
                    }}
                    value={newDT}
                    className="border border-slate-500 px-8 py-2"
                    type="checkbox"
                />
            </div>
            <div className=" grid grid-cols-2 my-2">

                <label>
                    Zatwierdzono przez KJ:
                </label>
                <input
                    onChange={(e) => setNewKJ(e.target.checked.toString())}
                    value={newKJ}
                    className="border border-slate-500 px-8 py-2"
                    type="checkbox"
                />
            </div>

            <div className=" grid grid-cols-2 my-2">

                <label>
                    Zatwierdzono przez KP:
                </label>
                <input
                    onChange={(e) => setNewKP(e.target.checked.toString())}
                    value={newKP}
                    className="border border-slate-500 px-8 py-2"
                    type="checkbox"
                />
            </div>

            <div className=" grid grid-cols-2 my-2">

                <label>
                    Zatwierdzono przez UR:
                </label>
                <input
                    onChange={(e) => setNewUR(e.target.checked.toString())}
                    value={newUR}
                    className="border border-slate-500 px-8 py-2"
                    type="checkbox"
                />
            </div>

            <div className=" grid grid-cols-2 my-2">

                <label>
                    Zatwierdzono do wypłaty:
                </label>
                <input
                    onChange={(e) => setNewPayment(e.target.checked.toString())}
                    value={newPayment}
                    className="border border-slate-500 px-8 py-2"
                    type="checkbox"
                />
            </div>

            <button
                type="submit"
                className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
            >
                Stwórz Tłumaczenie
            </button>
        </form>
    );
}