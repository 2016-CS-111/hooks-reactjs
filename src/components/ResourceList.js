import React from 'react';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
    const resources = useResources(resource);

    return (
        <div>
            {resources.map( record => 
            <ul key={record.id}>
                <li>
                    {record.title}
                </li>
            </ul>)}
        </div>
    );
};

export default ResourceList;