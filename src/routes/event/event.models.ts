export interface CreateEventBody {
  name: string;
  location: string;
  emails: string[];
}

export interface AddEmailsBody {
  emails: string[];
  id: string;
}
