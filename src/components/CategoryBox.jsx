import { useCallback } from "react";
import { IconType } from "react-icons";
import { useLocation, useNavigate } from "react-router-dom";

function CategoryBox({
  icon: Icon,
  label,
  selected,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const handleClick = useCallback(() => {
    const currentQuery = {};
    searchParams.forEach((value, key) => {
      currentQuery[key] = value;
    });

    const updatedQuery = {
      ...currentQuery,
      category: label,
    };

    if (searchParams.get('category') === label) {
      delete updatedQuery.category;
    }

    searchParams.set('category', label);

    const newSearch = '?' + searchParams.toString();
    navigate(location.pathname + newSearch);
  }, [label, navigate, location, searchParams]);

  return (
    <div
      onClick={handleClick}
      className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        p-3
        border-b-2
        hover:text-neutral-800
        transition
        cursor-pointer
        ${selected ? 'border-b-neutral-800' : 'border-transparent'}
        ${selected ? 'text-neutral-800' : 'text-neutral-500'}
      `}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">
        {label}
      </div>
    </div>
  );
}

export default CategoryBox;
