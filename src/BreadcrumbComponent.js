import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BreadcrumbComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter(i => i);

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {pathSnippets.map((snippet, index) => (
        <Breadcrumb.Item key={snippet}>
          {index < pathSnippets.length - 1 ? (
            <Link to={`/${pathSnippets.slice(0, index + 1).join('/')}`}>
              {snippet}
            </Link>
          ) : (
            snippet
          )}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;