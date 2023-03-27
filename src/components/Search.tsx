import React, { useContext, useRef } from "react";
import { WeatherContext } from "../App";
import debounce from "lodash.debounce";
import { useCallback } from "react";

const Search= ({refInput}) => {
  const { setSearch, value, setValue, focusClearInput }: any =
    useContext(WeatherContext);

  const onChangeSearch = debounce((e: string) => {
    setSearch(e);
  }, 1500);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChangeSearch(value);
    setValue(value);
  }, []);

  return (
    <div className="w-full flex items-center">
      <input
        ref={refInput}
        className="w-full h-10 pl-3 rounded-xl bg-white bg-opacity-20 placeholder:opacity-50 placeholder:text-sm focus:outline-none"
        type="text"
        placeholder="Write your city..."
        value={value}
        onChange={(e) => onChange(e)}
      />
      {value && (
        <svg
          onClick={() => focusClearInput()}
          className="absolute right-8 cursor-pointer"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.244 11.5779C21.661 11.5779 22 11.2389 22 10.8219V8.25291C22 4.39191 19.59 1.99991 15.753 1.99991H8.253C4.392 1.99991 2 4.39191 2 8.25591V15.7559C2 19.6079 4.392 21.9999 8.253 21.9999H15.756C19.608 21.9999 22 19.6079 21.997 15.7529C21.997 15.3309 21.654 14.9879 21.232 14.9879C20.809 14.9879 20.467 15.3309 20.467 15.7529C20.467 18.7869 18.796 20.4669 15.753 20.4669H8.253C5.21 20.4669 3.53 18.7869 3.53 15.7529V8.25291C3.53 5.20991 5.21 3.52991 8.256 3.52991H15.756C18.8 3.52991 20.47 5.19991 20.47 8.25291V10.7949V10.7969C20.471 11.2189 20.813 11.5599 21.235 11.5599V11.5779H21.244ZM9.8148 13.1453L9.1308 13.8293C8.8258 14.1193 8.8088 14.6003 9.0928 14.9113L9.1148 14.9273C9.4068 15.2193 9.8768 15.2273 10.1778 14.9453L10.8588 14.2643C11.1678 13.9763 11.1848 13.4923 10.8968 13.1823C10.6078 12.8743 10.1238 12.8563 9.8148 13.1453ZM15.1426 14.8032C14.8486 15.0962 14.3736 15.1022 14.0726 14.8152L14.0346 14.7782L9.2546 9.99921C8.9626 9.68921 8.9566 9.20721 9.2416 8.89121C9.5336 8.59221 10.0116 8.58621 10.3106 8.87821C10.3136 8.88021 10.3156 8.88221 10.3186 8.88521L12.1836 10.7512L13.8806 9.05321C14.1856 8.76221 14.6666 8.76521 14.9686 9.06021C15.0226 9.11421 15.0686 9.17521 15.1036 9.24321C15.2766 9.54421 15.2266 9.92221 14.9816 10.1682L13.2916 11.8572L15.1296 13.6962C15.4396 13.9892 15.4516 14.4782 15.1576 14.7872C15.1553 14.7906 15.1524 14.7934 15.1494 14.7962C15.1471 14.7984 15.1448 14.8006 15.1426 14.8032Z"
            fill="white"
          />
        </svg>
      )}
    </div>
  );
};

export default Search;
