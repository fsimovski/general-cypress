export interface getUsersResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: getUsersData;
  ad: getUsersAd;

}
export interface getUsersData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
export interface getUsersAd {
  company: string;
  url: string;
  text: string;
}