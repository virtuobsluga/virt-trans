import EditTranslationForm from '@/components/EditTranslationForm'
import React from 'react'

const getTranslationById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/translations/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch translation");
        }

        return res.json();
    } catch (error) {
        console.log(error);
        return { translation: {} };

    }
};

const EditTranslation = async ({ params }) => {

    const { id } = params;
    const { translation } = await getTranslationById(id);
    const { path, assignee, approved_dt, approved_kj, approved_kp, approved_ur, payment } = translation;
    console.log(translation);
    return (
        <EditTranslationForm
            id={id}
            path={path}
            assignee={assignee}
            approved_dt={approved_dt}
            approved_kj={approved_kj}
            approved_kp={approved_kp}
            approved_ur={approved_ur}
            payment={payment}

        />
    )
}

export default EditTranslation