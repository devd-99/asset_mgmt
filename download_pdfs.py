import requests
import json
import os

# Endpoint and headers for the initial request
initial_url = f'https://data.europarl.europa.eu/api/v2/documents?format=application%2Fld%2Bjson&offset=0&limit=50'
headers = {
    'accept': '*/*'
}

# Function to get document IDs
def get_document_ids(url, headers):
    response = requests.get(url, headers=headers)
    response.raise_for_status()  # Raise an error for bad status codes
    data = response.json()
    # print(data)
    document_ids = [doc['identifier'] for doc in data['data']]
    print(document_ids)
    return document_ids

# Function to get document details
def get_document_details(doc_id, headers):
    detail_url = f'https://data.europarl.europa.eu/api/v2/documents/{doc_id}?format=application%2Fld%2Bjson'
    response = requests.get(detail_url, headers=headers)
    response.raise_for_status()  # Raise an error for bad status codes
    print(response.json())
    return response.json()

# Function to download PDF
def download_pdf(pdf_url, output_path):
    response = requests.get(pdf_url, headers=headers)
    response.raise_for_status()  # Raise an error for bad status codes
    with open(output_path, 'wb') as file:
        file.write(response.content)

# Main process to get PDFs within a year
def download_pdfs_within_year(initial_url, headers, year):
    document_ids = get_document_ids(initial_url, headers)
    for doc_id in document_ids:
        details = get_document_details(doc_id, headers)
        doc_year = details['publicationDate'][:4]
        if int(doc_year) == year:
            pdf_urls = [file['url'] for file in details['files'] if file['format'] == 'application/pdf']
            for pdf_url in pdf_urls:
                pdf_name = pdf_url.split('/')[-1]
                output_path = os.path.join(os.getcwd(), pdf_name)
                download_pdf(pdf_url, output_path)
                print(f'Downloaded {pdf_name}')

# Example usage
download_pdfs_within_year(initial_url, headers, 2023)
