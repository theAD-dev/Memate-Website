import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { wikiBaseId } from "../../api/wikiApi"; 

const WikiSinglePage = () => {
    const { id } = useParams(); 
    

  
    const { data } = useQuery(['detailData', id], () => wikiBaseId(id), {
        enabled: !!id, 
    });



    return (
        <div>
            <h1>Details for ID: {id}</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default WikiSinglePage;
