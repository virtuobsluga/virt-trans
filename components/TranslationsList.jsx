import React from 'react'
import RemoveBtn from './RemoveBtn'
import { HiOutlineCheck, HiPencilAlt, HiX } from 'react-icons/hi'

import Link from 'next/link'

const getTranslations = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/translations", {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch translations");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading translations: ", error);
        return { translations: [] };
    }
};


const TranslationsList = async () => {
    const { translations } = await getTranslations();


    return (<>{translations && translations?.toReversed()?.map((t) => (
        <div key={t?._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start m-auto">
            <div>
                <h2 className="font-bold text-2xl">{t?.path}</h2>
                <div className="flex gap-2">

                    <div className="flex gap-2">
                        <div>Stworzono</div>
                        <p className="font-bold">{new Date(t.createdAt).toString()}</p>
                        <p>przez</p>
                        <p className="font-bold">{t?.created_by}</p>
                    </div>


                </div>
                {t?.modified_by && (
                    <div className="flex gap-2">
                        <div className="flex gap-2">
                            <div>Zmodyfikowano</div>
                            <p className="font-bold">{new Date(t.updatedAt).toString()}</p>
                            <p>przez</p>
                            <p className="font-bold">{t?.modified_by}</p>
                        </div>
                    </div>
                )}
                <div className="flex gap-2">

                    <div className="flex gap-2">
                        <div>Osoba Przydzielona:</div>
                        <p className="font-bold">{t?.assignee}</p>
                    </div>

                </div>
                <div> Zatwierdzono przez:
                    <div className="flex gap-2">
                        <div className="font-bold">DT</div>
                        {t?.approved_dt ? <HiOutlineCheck size={24} color="green" /> : <HiX size={24} color="red" />}
                        <div className="flex gap-2">
                            <div className="font-bold">KJ</div>
                            {t?.approved_kj ? <HiOutlineCheck size={24} color="green" /> : <HiX size={24} color="red" />}
                        </div>
                        <div className="flex gap-2">
                            <div className="font-bold">KP:</div>
                            {t?.approved_kp ? <HiOutlineCheck size={24} color="green" /> : <HiX size={24} color="red" />}
                        </div>
                        <div className="flex gap-2">
                            <div className="font-bold">UR:</div>
                            {t?.approved_ur ? <HiOutlineCheck size={24} color="green" /> : <HiX size={24} color="red" />}
                        </div>
                    </div>
                    <div className="flex gap-2">

                        <div className="flex gap-2">
                            <div>Zatweirdzono do wypłaty:</div>
                            {t?.payment ? <HiOutlineCheck size={24} color="green" /> : <HiX size={24} color="red" />}
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex gap-2">
                <RemoveBtn id={t?._id} />
                <Link href={`/editTranslation/${t?._id}`}>
                    <HiPencilAlt size={24} />
                </Link>
            </div>
        </div>
    ))
    }
    </>
    )
}

export default TranslationsList;