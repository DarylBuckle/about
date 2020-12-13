export interface Profile {
    name: string; // Your name.
    title: string; // Your current job title.
    title2: string;
    location?: string; // Your current location.
    linkedin?: string; // Your LinkedIn user name. If set this will show in the footer.
    twitter?: string; // Your Twitter user name. If set this will show in the footer.
    facebook?: string; // Your Facebook user name. If set this will show in the footer.
    instagram?: string; // Your Instagram user name. If set this will show in the footer.
    github?: string; // Your GitHub profile user name. If set this will show in the footer.
    stackoverflow?: string; // Your Stack Overflow profile user id. If set this will show in the footer.
    email?: string; // Your contact email address. This will show in the footer if set.
    mailto?: string; // Email Address where the contact button will send to.
    portfolioUrl?: string;
    blogUrl?: string;
}
