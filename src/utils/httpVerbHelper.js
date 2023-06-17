//HTTP Methods for RESTful Services
const HTTPVerbs = {
    /// The HTTP GET method is used to **read** (or retrieve) a representation of a resource.
    GET: "GET",
    /// The POST verb is most-often utilized to **create** new resources.
    POST: "POST",
    /// PUT is most-often utilized for **update** capabilities
    PUT: "PUT",
    /// DELETE is pretty easy to understand. It is used to **delete** a resource identified by a URI.
    DELETE:"DELETE",
    /// PATCH is used for **modify** capabilities. The PATCH request only needs to contain the changes to the resource, not the complete resource.
    PATCH: "PATCH"
}

module.exports = HTTPVerbs;