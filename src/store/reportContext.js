import React, { createContext, useEffect, useState } from "react";

export const ReportContext = createContext([]);

export const ReportStorage = ({ children }) => {
    const [reports, setReports] = useState([]);

    const solveReport = (id) => {
        const newReports = reports.filter((report) => {
            return report.id !== id;
        });

        setReports(newReports);
    }

    const addReport = (report) => {
        // Get new ID
        const newId = reports.length + 1;

        // Create new report
        const newReport = {
            id: newId,
            // title: report.title,
            title: 'Água parada',
            description: report.description,
            // image: report.image,
            image: require('../../assets/agua-parada.jpeg'),
            likes: 0,
            dislikes: 0,
        };

        // Add new report to reports
        setReports([...reports, newReport]);
    }


    useEffect(() => {
        setReports([
            {
                id: 1,
                image: require('../../assets/arquitetura.jpg'),
                title: 'Praça Arquitetura',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit lectus non justo elementum, eget varius ipsum posuere. Aenean a metus dictum mi pretium pulvinar vitae vitae dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla lacus dui, porttitor nec dictum nec, ultricies et enim. ',
                likes: 12,
                dislikes: 0,
            },
            {
                id: 2,
                title: 'Saída Matemática',
                image: require('../../assets/matematica.jpg'),
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit lectus non justo elementum, eget varius ipsum posuere. Aenean a metus dictum mi pretium pulvinar vitae vitae dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla lacus dui, porttitor nec dictum nec, ultricies et enim. ',
                likes: 5,
                dislikes: 1,
            },
            {
                id: 3,
                image: require('../../assets/bandejao.jpg'),
                title: 'Bandejão',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit lectus non justo elementum, eget varius ipsum posuere. Aenean a metus dictum mi pretium pulvinar vitae vitae dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla lacus dui, porttitor nec dictum nec, ultricies et enim. ',
                likes: 1,
                dislikes: 7,
            }
        ]);
    }, []);

    return (
    <ReportContext.Provider
        value={{
        reports,
        solveReport,
        addReport,
        }}
    >
        {children}
    </ReportContext.Provider>
    );
};