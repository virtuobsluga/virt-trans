"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTranslation () {
    const [path, setPath] = useState("");
    const [assignee, setAssignee] = useState("");
    const [approved_dt, setApprovedDt] = useState("false");
    const [approved_kj, setApprovedKj] = useState("false");
    const [approved_kp, setApprovedKp] = useState("false");
    const [approved_ur, setApprovedUr] = useState("false");
    const [payment, setPayment] = useState("false");
    const [created_by, setCreatedBy] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify({ path, assignee, approved_dt, approved_kj, approved_kp, approved_ur, payment, created_by }))
        if (!path || !created_by) {
            alert("Nazwa pliku i użytkownika jest wymagana");
            return;
        }

        try {

            const res = await fetch("http://localhost:3000/api/translations", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ path, assignee, approved_dt, approved_kj, approved_kp, approved_ur, payment, created_by }),
            });

            if (res.ok) {
                router.push("/");
                router.refresh();
            } else {
                console.log(res);
                throw new Error("cannot create translation");
            }
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
                    onChange={(e) => setPath(e.target.value)}
                    value={path}
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
                    onChange={(e) => setCreatedBy(e.target.value)}
                    value={created_by}
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
                    onChange={(e) => setAssignee(e.target.value)}
                    value={assignee}
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
                        setApprovedDt(e.target.checked.toString())
                    }}
                    value={approved_dt}
                    className="border border-slate-500 px-8 py-2"
                    type="checkbox"
                />
            </div>
            <div className=" grid grid-cols-2 my-2">

                <label>
                    Zatwierdzono przez KJ:
                </label>
                <input
                    onChange={(e) => setApprovedKj(e.target.checked.toString())}
                    value={approved_kj}
                    className="border border-slate-500 px-8 py-2"
                    type="checkbox"
                />
            </div>

            <div className=" grid grid-cols-2 my-2">

                <label>
                    Zatwierdzono przez KP:
                </label>
                <input
                    onChange={(e) => setApprovedKp(e.target.checked.toString())}
                    value={approved_kp}
                    className="border border-slate-500 px-8 py-2"
                    type="checkbox"
                />
            </div>

            <div className=" grid grid-cols-2 my-2">

                <label>
                    Zatwierdzono przez UR:
                </label>
                <input
                    onChange={(e) => setApprovedUr(e.target.checked.toString())}
                    value={approved_ur}
                    className="border border-slate-500 px-8 py-2"
                    type="checkbox"
                />
            </div>

            <div className=" grid grid-cols-2 my-2">

                <label>
                    Zatwierdzono do wypłaty:
                </label>
                <input
                    onChange={(e) => setPayment(e.target.checked.toString())}
                    value={payment}
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