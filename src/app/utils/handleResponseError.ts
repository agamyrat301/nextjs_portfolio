export async function handleError(response: Response): Promise<Error> {
    const responseBody = await response.text(); 
    const statusCode = response.status;
  
    const errorMessages: { [key: number]: string } = {
      400: `Bad request.`,
      500:'Server Error custom'
    };
  
    const errorMessage = 'Server Error';
  
    console.error("Error fetching data:", errorMessage);
  
    return new Error(errorMessage);
  }