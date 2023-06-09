import React, { createContext, useEffect, useState } from "react";
import arquiteturaImage from "@assets/arquitetura.jpg";
import matematicaImage from "@assets/matematica.jpg";
import bandeijaoImage from "@assets/bandejao.jpg";

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
            title: report.title,
            description: report.description,
            image: report.image,
            likes: 0,
            dislikes: 0,
            coordinates: report.coordinates
        };

        // Add new report to reports
        setReports([...reports, newReport]);
    }

    useEffect(() => {
        setReports([
            {
                id: 1,
                image: arquiteturaImage,
                title: 'Praça Arquitetura',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit lectus non justo elementum, eget varius ipsum posuere. Aenean a metus dictum mi pretium pulvinar vitae vitae dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla lacus dui, porttitor nec dictum nec, ultricies et enim. ',
                likes: 12,
                dislikes: 0,
                coordinates: {
                    latitude: -22.0029865,
                    longitude: -47.897859
                }
            },
            {
                id: 2,
                title: 'Saída Matemática',
                image: matematicaImage,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit lectus non justo elementum, eget varius ipsum posuere. Aenean a metus dictum mi pretium pulvinar vitae vitae dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla lacus dui, porttitor nec dictum nec, ultricies et enim. ',
                likes: 5,
                dislikes: 1,
                coordinates: {
                    latitude: -22.0066387,
                    longitude: -47.895924,
                }
            },
            {
                id: 3,
                image: bandeijaoImage,
                title: 'Bandejão',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit lectus non justo elementum, eget varius ipsum posuere. Aenean a metus dictum mi pretium pulvinar vitae vitae dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla lacus dui, porttitor nec dictum nec, ultricies et enim. ',
                likes: 1,
                dislikes: 7,
                coordinates: {
                    latitude: -22.0065517,
                    longitude: -47.8969119
                }
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