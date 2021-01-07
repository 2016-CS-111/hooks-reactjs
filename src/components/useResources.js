import { useState, useEffect } from 'react';
import JSON from '../apis/JsonPlaceholder'

// Func for (logic of apis)reusabiltiy 
const useResources = (resource) => {
    const [resources, setResources] = useState([]);

    const fetchResources = async (resource) => {
        const response = await JSON.get(`/${resource}`);
        setResources(response.data);
    }

    useEffect(() => {
        fetchResources(resource)
    }, [resource])

    return resources;
};

export default useResources;