import React from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSearchParams } from "react-router-dom";

function Paginate({ page, pages, keyword = "", isAdmin = false }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageChange = (pageNumber) => {
    setSearchParams({ keyword, page: pageNumber });
  };

  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={
              !isAdmin
                ? {
                    pathname: "/",
                    search: new URLSearchParams({
                      keyword: keyword || "",
                      page: x + 1,
                    }).toString(),
                  }
                : {
                    pathname: "/admin/productlist/",
                    search: new URLSearchParams({
                      keyword: keyword || "",
                      page: x + 1,
                    }).toString(),
                  }
            }
          >
            <Pagination.Item
              active={x + 1 === page}
              onClick={() => handlePageChange(x + 1)}
            >
              {x + 1}
            </Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
}

export default Paginate;
