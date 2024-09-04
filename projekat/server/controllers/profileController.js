const Profile = require("../models/Profile");

// Kontroler za preuzimanje profila
const get_profile = async (req, res) => {
    try {
      // Pronađi profil korisnika po ID-u
      const profile = await Profile.findOne({ user: req.params.userId });
      if (!profile) return res.status(404).json({ error: "Profile not found" });
      // Vrati profil kao odgovor
      res.json(profile);
    } catch (error) {
      // Ako dođe do greške, vrati grešku
      res.status(500).json({ error: error.message });
    }
  };

// Kontroler za kreiranje ili ažuriranje profila
const create_profile = async (req, res) => {
    const { bio, avatar } = req.body;
    try {
      // Pokušaj da pronađe postojeći profil za korisnika
      let profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        // Ako profil već postoji, ažuriraj ga
        profile.bio = bio || profile.bio;
        profile.avatar = avatar || profile.avatar;
        await profile.save();
        return res.json(profile);
      }
      // Ako profil ne postoji, kreiraj novi
      profile = new Profile({
        user: req.user.id,
        bio,
        avatar
      });
      await profile.save();
      res.json(profile);
    } catch (error) {
      // Ako dođe do greške, vrati grešku
      res.status(500).json({ error: error.message });
    }
};

const update_profile = async (req, res) => {
  const { bio, avatar } = req.body;
  const { userId } = req.params;

  try {
    // Find and update profile
    let profile = await Profile.findOneAndUpdate(
      { user: userId },
      { bio, avatar },
      { new: true }
    );

    // If profile doesn't exist, create a new one
    if (!profile) {
      profile = new Profile({ user: userId, bio, avatar });
      await profile.save();
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Izvoz kontrolera
module.exports = {
    get_profile,
    create_profile,
    update_profile
};
